import { defineMiddleware } from "astro:middleware";

// need a default implementation when "i18n.routing" is "manual"
export const onRequest = defineMiddleware((ctx, next) => next());
