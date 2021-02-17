const baseUrl = 'http://localhost:3001/api/v1/reservations';

const apiCalls = {
  getAllReservations() {
    return (
      fetch(baseUrl)
    );
  },

  makeNewRes(newRes) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newRes)
    };

    return (
      fetch(baseUrl, options)
    );
  },

  deleteRes(id) {
    return (
      fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
    );
  }

}

export default apiCalls;