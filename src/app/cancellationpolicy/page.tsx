export default function CancellationPolicyPage() {
  return (
    <div className="layout lg:px-20 px-4 lg:gap-14 gap-8 pt-4">
      <h2 className="h2b">Cancellation Policy</h2>
      <div className="flex flex-col gap-6">
        <p>
          At Travel Your Dream Destination (TYDD), we strive to provide flexible and
          customer-friendly cancellation terms. Please read the following policy carefully.
        </p>
        <article>
          <h4>1. General Cancellation Terms</h4>
          <ul>
            <li>- Cancellations must be communicated via email or in writing.</li>
            <li>
              - The effective date of cancellation will be the date on which we receive written
              confirmation.
            </li>
          </ul>
        </article>

        <article>
          <h4>2. Cancellation Charges</h4>
          <ul>
            <li>- 30 days or more before departure: 10% of the tour cost</li>
            <li>- 15 to 29 days before departure: 30% of the tour cost</li>
            <li>- 7 to 14 days before departure: 50% of the tour cost</li>
            <li>- Less than 7 days before departure: 100% of the tour cost</li>
          </ul>
        </article>

        <article>
          <h4>3. Refund Process</h4>
          <ul>
            <li>
              - Refunds, if applicable, will be processed within 15 working days from the date of
              cancellation.
            </li>
            <li>
              - All refunds will be subject to deductions for bank charges, third-party service
              fees, and non-refundable components.
            </li>
          </ul>
        </article>

        <article>
          <h4>4. Non-Refundable Bookings</h4>
          <p>
            - Certain services like flight tickets, visa fees, and hotel bookings are
            non-refundable.
          </p>
        </article>

        <article>
          <h4>5. Modifications</h4>
          <p>
            - Any change in the itinerary may incur additional charges and will be subject to
            availability.
          </p>
        </article>
        <p>
          We recommend purchasing travel insurance to cover unforeseen cancellations and
          emergencies.
        </p>
      </div>
    </div>
  );
}
