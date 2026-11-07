export const WHATSAPP_NUMBER = "919990239757";

const DEFAULT_MESSAGE =
  "Hi DHURANDER! I want to create my gaming ID. Please share the next steps.";

export function waLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function gameMessage(game) {
  return `Hi DHURANDER! I want to get my ID for ${game}. Please share the details.`;
}