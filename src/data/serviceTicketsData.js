const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getServiceTicketById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

//POST - Creating a Service Ticket
export const createServiceTicket = async (payload) => {
  try {
    const response = await fetch(`${_apiUrl}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Error creating ticket');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error creating ticket: ${error.message}`);
  }
};

//DELETE - DELETING A SERVICE TICKET
export const deleteServiceTicket = async (id) => {
  try {
    const response = await fetch(`${_apiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error deleting ticket');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error deleting ticket: ${error.message}`);
  }
};
