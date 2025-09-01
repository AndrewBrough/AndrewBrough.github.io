import { StylesPage } from "@/pages/StylesPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/styles")({
  component: RouteComponent
});

function RouteComponent() {
  return <StylesPage />;
}
