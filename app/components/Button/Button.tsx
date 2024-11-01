"use client";

const Button = () => {

    const goDown = () => {
        // Scorre verso il basso di 500px
        const scrollAmount = window.innerHeight * 0.9; // Calcola 90% dell'altezza della viewport
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
    <div className="fixed bottom-4 right-4">
        <button
            onClick={goDown}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Button
        </button>
    </div>
    );
};

export default Button;
