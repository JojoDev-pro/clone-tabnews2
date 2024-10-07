function status(request, response) {
  response.status(200).json({ chave: "sou o sonic" });
}

export default status;
