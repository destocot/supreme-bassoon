import type {
  Department,
  Profile,
  ProfileWithTechnicianDetails,
  TechnicianDetail,
  UserRole,
} from "@/utils/supabase/types";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UpdateTechnicianDialog } from "@/features/technician-details/components/update-technician-dialog";
import { UpdateProfileDialog } from "@/features/profiles/components/update-profile-dialog";
import { formatTime } from "@/lib/utils";
import { DeleteUserDialog } from "@/features/users/components/delete-user-dialog";

type TechnicianCardProps = {
  profile: ProfileWithTechnicianDetails;
};

export const TechnicianCard = ({ profile }: TechnicianCardProps) => {
  return (
    <div key={profile.id} className="flex items-center gap-1">
      <details className="group flex-1 rounded border p-4 shadow">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
          <p>
            {profile.last_name}, {profile.first_name}
          </p>
          <div className="flex items-center gap-4">
            {profile.technician_details?.department_id ? (
              <p className="rounded border border-gray-300 bg-white px-4 py-2 text-sm font-bold shadow-sm">
                {profile.technician_details?.departments?.name}
              </p>
            ) : null}
            <span className="flex size-6 items-center justify-center rounded-md bg-blue-500 px-2 text-xs text-white shadow group-open:rotate-180 hover:bg-blue-600">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        </summary>
        <div className="space-y-2 pt-2">
          <div className="bg-muted h-0.5" />
          <ProfileInformation profile={profile} />
          <div className="bg-muted h-0.5" />
          {profile.technician_details ? (
            <TechnicianDetailsInformation
              technicianDetails={profile.technician_details}
              role={profile.role}
            />
          ) : null}
        </div>
      </details>
      <div className="self-start">
        <DeleteUserDialog userId={profile.id} />
      </div>
    </div>
  );
};

const ProfileInformation = ({ profile }: { profile: Profile }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <div className="flex-1">
        <p>
          <strong>Address Line 1</strong>: {profile.address_line1}
        </p>
        <p>
          <strong>Address Line 2</strong>: {profile.address_line2}
        </p>
        <p>
          <strong>City</strong>: {profile.city}
        </p>
        <p>
          <strong>State</strong>: {profile.state}
        </p>
        <p>
          <strong>Postal Code</strong>: {profile.postal_code}
        </p>
      </div>
      <div className="flex-1">
        <p>
          <strong>Primary Phone</strong>: {profile.primary_phone}
        </p>
        <p>
          <strong>Secondary Phone</strong>: {profile.secondary_phone}
        </p>
      </div>
      <div className="justify-self-end">
        <UpdateProfileDialog profile={profile} />
      </div>
    </div>
  );
};

const TechnicianDetailsInformation = ({
  technicianDetails,
  role,
}: {
  technicianDetails: TechnicianDetail & { departments: Department | null };
  role: UserRole;
}) => {
  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <div>
        <p>
          <strong>Break Start Time</strong>:{" "}
          {technicianDetails?.break_start_time
            ? formatTime(technicianDetails?.break_start_time)
            : null}
        </p>
        <p>
          <strong>Break End Time</strong>:{" "}
          {technicianDetails?.break_end_time
            ? formatTime(technicianDetails?.break_end_time)
            : null}
        </p>
        <p>
          <strong>Work Start Time</strong>:{" "}
          {technicianDetails?.work_start_time
            ? formatTime(technicianDetails?.work_start_time)
            : null}
        </p>
        <p>
          <strong>Work End Time</strong>:{" "}
          {technicianDetails?.work_end_time
            ? formatTime(technicianDetails?.work_end_time)
            : null}
        </p>
        <div className="flex flex-col justify-between sm:flex-row sm:gap-2">
          <p>
            <strong>Work Days</strong>:{" "}
            {technicianDetails?.work_days?.join(", ")}
          </p>
        </div>
      </div>
      <div>
        <UpdateTechnicianDialog
          technicianDetails={technicianDetails}
          role={role}
        />
      </div>
    </div>
  );
};
