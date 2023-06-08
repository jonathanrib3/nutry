/**
 * Envia o parâmetro de busca pra API e retorna os dados fornecidos por ela
 * @param { string } strBusca - input do usuário
 */

const API_ADDRESS = "http://localhost:3000/";

export async function buscaComida(strBusca) {
  const response = await fetch(`${API_ADDRESS}/search/?s=${strBusca}`);

  if (response.status !== 200) {
    throw new Error("Erro ao consumir API");
  }

  return response.body;
}
