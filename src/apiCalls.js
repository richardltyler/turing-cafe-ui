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
  }

}

export default apiCalls;