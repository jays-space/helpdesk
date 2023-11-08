import { Suspense } from "react";

// API
import TicketList from "./ticketList";
import Loading from "../loading";
import Link from "next/link";

const TicketsPage = () => {
  return (
    <main>
      <nav className="flex flex-ro-w justify-between items-center">
        <div className="flex items-baseline gap-x-2">
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>

        <Link href={`/tickets/create`}>
          <button className="btn-primary">Create Ticket</button>
        </Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default TicketsPage;
