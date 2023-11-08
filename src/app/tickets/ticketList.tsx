import Link from "next/link";

// TYPES
import { TicketType } from "./tickets.types";

const getTickets = async (): Promise<TicketType[]> => {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res: Response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
};

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map(({ id, body, priority, title }) => {
        return (
          <Link key={id} href={`/tickets/[id]`} as={`/tickets/${id}`}>
            <div className={`card my-5`}>
              <h3>{title}</h3>
              <p>{body.slice(0, 200)}...</p>
              <div className={`pill ${priority}`}>{priority} priority</div>
            </div>
          </Link>
        );
      })}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
};

export default TicketList;
