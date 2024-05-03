import DefaultHeader from "../../default";

export default function NestedRouteHeader() {
  const shouldRecolor = true; // some fetch/logic here

  return <DefaultHeader recolor={shouldRecolor} />;
}