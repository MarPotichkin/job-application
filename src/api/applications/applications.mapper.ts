import type { Application } from "../../types/application";
import type { ApplicationDTO } from "./applications.dto";

export function mapApplication(dto: ApplicationDTO): Application {
  return {
    uuid: dto.uuid,
    candidateId: dto.candidateId,
    applicationId: dto.applicationId,
    firstName: dto.firstName,
    lastName: dto.lastName,
    email: dto.email,
  };
}
