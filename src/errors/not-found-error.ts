import { ApplicationError } from "../protocols/application-error";

export function notFoundError(message: string): ApplicationError {
  return {
    name: "NotFoundError",
    message,
  };
}
