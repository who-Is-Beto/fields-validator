import path from "path";
export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "who-fields-validator",
      fileName: (format) => `who-fields-validator.${format}.js`
    }
  }
};
