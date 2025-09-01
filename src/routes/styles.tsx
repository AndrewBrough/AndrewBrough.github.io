import { Styles } from "@/pages/Styles";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/styles")({
  component: RouteComponent
});

function RouteComponent() {
  return <Styles />;
}
