import React from "react";
import "./TrustStatement.css"
export default function TrustStatement() {
    return (
        <div className="trust-statement-container">
            <div className="authenticity">
                <h2>AUTHENTICITY GUARANTEED</h2>
                <p>
                    Authenticity is the foundation of our business, and every
                    item we sell is inspected by our expert team.
                </p>
            </div>
            <div className="sourcing">
                <h2>SOURCING</h2>
                <p>
                    We are always sourcing, so if you don't find something, just
                    send us an email.
                </p>
            </div>
            <div className="shipping">
                <h2>WORLDWIDE SHIPPING</h2>
                <p>
                    Get your drip, where ever you want in the world. Please
                    allow some time for special sourcing requests{" "}
                </p>
            </div>
        </div>
    );
}
