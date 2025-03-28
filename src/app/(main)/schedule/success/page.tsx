import { Button } from "@/components/ui/button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success - Please Check Your Email",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8">
        <div className="mt-2 max-w-md rounded-lg bg-blue-100 p-6 shadow-lg sm:mx-auto sm:w-full md:max-w-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-center text-2xl font-bold tracking-tight text-blue-800">
              Success!
            </h1>
            <h2 className="my-2 text-center text-xl font-bold tracking-tight text-blue-600">
              We received your appointment request.{" "}
              <span className="block">
                Check your email for scheduling details.
              </span>
            </h2>
          </div>

          <p className="mt-4 text-center text-sm/6 text-slate-700">
            If you don&apos;t see an email from us, please check your spam or
            junk folder. If you still don&apos;t see it,{" "}
            <strong>please contact us</strong> for assistance.
          </p>
          <p className="mt-4 text-center text-sm/6 text-slate-700">
            You can{" "}
            <Button
              asLink
              href="/schedule"
              variant="link"
              className="px-0 font-semibold text-blue-700"
            >
              schedule another service
            </Button>{" "}
            <span>or return to your dashboard below.</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center text-slate-700">
        <Button asLink variant="ghost" href="/dashboard">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to your dashboard
        </Button>
      </div>
    </div>
  );
}
