import { ApplicationError } from "../protocols/application-error";

export function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
  };
}
