import { defineMiddleware } from "astro:middleware";

// requires an implementation when "i18n.routing" is "manual"
export const onRequest = defineMiddleware((ctx, next) => next());
