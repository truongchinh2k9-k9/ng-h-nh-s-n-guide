export const ChatMemory = {
  history: [] as Array<{ role: "user" | "model"; text: string }>,

  addUser(msg: string) {
    this.history.push({ role: "user", text: msg });
  },

  addModel(msg: string) {
    this.history.push({ role: "model", text: msg });
  },

  clear() {
    this.history = [];
  }
};
