// const { setupServer } = require("msw/node");

// const server = setupServer();

// server.listen({ onUnhandledRequest: "bypass" });

// process.once("SIGINT", () => server.close());
// process.once("SIGTERM", () => server.close());

console.log("MSW deactivated due to interceptor error - https://github.com/remix-run/grunge-stack/issues/60")
