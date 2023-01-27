import { ApplicationError } from "../protocols/application-error";

export function unauthorizedError(message: string): ApplicationError {
  return {
    name: "UnauthorizedError",
    message,
  };
}
