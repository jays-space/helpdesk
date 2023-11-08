import { notFound } from "next/navigation";

// TYPES
import { ITicketDetailsPage, TicketType } from "../tickets.types";

export const generateStaticParams = async () => {
  const res: Response = await fetch("http://localhost:4000/tickets");
  const tickets: TicketType[] = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
};

const getTicket = async (id: string): Promise<TicketType> => {
  const res: Response = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) notFound();

  return res.json();
};

const TicketDetailsPage = async ({ params }: ITicketDetailsPage) => {
  const id = params.id;
  const ticket = await getTicket(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>

      <div className="card">
        <h3>{ticket?.title}</h3>
        <small>Created by {ticket?.user_email}</small>
        <p>{ticket?.body}</p>
        <div className={`pill ${ticket?.priority}`}>
          {ticket?.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetailsPage;
