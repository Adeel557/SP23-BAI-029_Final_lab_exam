const express = require("express");
const { initTRPC } = require("@trpc/server");
const { createExpressMiddleware } = require("@trpc/server/adapters/express");

const t = initTRPC.create();

const appRouter = t.router({
  uploadImage: t.procedure.mutation(() => {
    return {
      label: "cat",
      confidence: 0.93,
    };
  }),
});

const app = express();
app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(4000, () => console.log("tRPC running on port 4000"));
