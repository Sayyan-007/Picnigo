import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../axios";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const stripePromise = loadStripe("pk_test_51QwJEjDPOubF1ALgAlYBczinsz8PAPWoncWH1i2IDyF0nzRdl0UloXF2RZPbWzO5hqK2jQcMmJTR7JBhMPXS5iV500koVih2hx");

const BookNowhotel = () => {
    const { id } = useParams();
    const { id: user_id, username: user_name } = useSelector((store) => store.user);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await Axios.get("user/hotelpackages/display");
                setData(response.data.displayedData || []);
            } catch (error) {
                console.error("Error fetching packages:", error);
                setError("Failed to load travel packages.");
            }
        };
        fetchPackages();
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center fw-bold">Book Your Travel Package</h1>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            <div className="row align-items-center justify-content-center">
                {data
                    .filter((packageData) => packageData._id === id)
                    .map((packageData) => (
                        <div className="col-lg-6 text-center" key={packageData._id}>
                            <h4 className="text-danger">User ID: {user_id}</h4>
                            <h4 className="text-danger">User Name: {user_name}</h4>
                            <h2 className="fw-bolder">Amount: ${packageData.Prize}</h2>
                            <h4 className="fw-lighter">Package ID: {packageData._id}</h4>
                            <h4 className="fw-lighter">Package Name: {packageData.Hotel_Name}</h4>
                            <h4 className="fw-lighter">Mangment_name: {packageData.Mangment_name}</h4>
                            <h4 className="fw-lighter">Category: {packageData.Type}</h4>

                            {/* Ensure Stripe is properly initialized */}
                            <Elements stripe={stripePromise}>
                                <PaymentForm
                                    user_id={user_id}
                                    user_name={user_name}
                                    package_id={packageData._id}
                                    package_name={packageData.Hotel_Name}
                                    package_amount={packageData.Prize}

                                    host_id={packageData.Mangment_id}
                                    host_name={packageData.Mangment_name}
                                    host_type="Hotel"

                                    
                                    Category={packageData.Type}
                                />
                            </Elements>
                        </div>
                    ))}
            </div>
        </div>
    );
};

// Separate PaymentForm Component
const PaymentForm = ({ user_id, user_name, package_id, package_name, package_amount, Category ,host_id,host_name ,host_type}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const handleBooking = async () => {
        if (!stripe || !elements) {
            setError("Stripe is not properly initialized.");
            return;
        }

        setLoading(true);
        try {
            // Create a Stripe payment method
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
            });

            if (error) {
                console.error("Payment error:", error);
                setError(error.message);
                setLoading(false);
                return;
            }

            // Send booking request with payment details
            await Axios.post("book/agency/create", {
                user_id,
                user_name,
                package_id,
                package_name,
                package_amount,
                host_id,
                host_name,
                host_type,
                Category,
                date: new Date().toLocaleDateString("en-GB"),
                paymentMethodId: paymentMethod.id, // Send Stripe Payment ID
            });

            toast.success("Booking successful!")

            navigate('/success')
            
        } catch (error) {
            console.error("Booking error:", error);
            setError("Booking failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="mt-4">
            {error && <div className="alert alert-danger text-center">{error}</div>}
            <div className="p-3 border rounded">
                <CardElement />
            </div>
            <button
                className="btn btn-outline-success fw-bold rounded-4 mt-3"
                type="button"
                onClick={handleBooking}
                disabled={loading}
            >
                {loading ? "Processing..." : "Book & Pay"}
            </button>
        </form>
    );
};

export default BookNowhotel;
