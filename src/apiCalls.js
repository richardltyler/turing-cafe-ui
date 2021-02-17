const apiCalls = {
  getAllReservations() {
    return (
      fetch('http://localhost:3001/api/v1/reservations')
    );
  }
}

export default apiCalls;