//import { Button } from "@material-ui/core";
import ButtonComponent from "./ButtonComponent";

export default {
  title: "Button",
  component: ButtonComponent,
};

export const Primary = () => (
  <ButtonComponent
    variant="contained"
    color="primary"
    size="medium"
    onClick={() => console.log("you clicked me")}
    name="Primary"
  ></ButtonComponent>
);

export const Secondary = () => (
  <ButtonComponent
    variant="contained"
    color="secondary"
    size="medium"
    onClick={() => console.log("you clicked me")}
    name="Secondary"
  ></ButtonComponent>
);

export const Small = () => (
  <ButtonComponent
    variant="contained"
    color="primary"
    size="small"
    onClick={() => console.log("you clicked me")}
    name="Small"
  ></ButtonComponent>
);

export const Medium = () => (
  <ButtonComponent
    variant="contained"
    color="primary"
    size="medium"
    onClick={() => console.log("you clicked me")}
    name="Medium"
  ></ButtonComponent>
);

export const Large = () => (
  <ButtonComponent
    variant="contained"
    color="primary"
    size="large"
    onClick={() => console.log("you clicked me")}
    name="Large"
  ></ButtonComponent>
);

export const Disabled = () => (
  <ButtonComponent
    variant="contained"
    color="primary"
    size="large"
    disabled={true}
    name="Disabled"
  ></ButtonComponent>
);
