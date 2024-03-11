import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
// import { Link } from "react-router-dom";

function OrgHospitalForm({ type }) {
  // const [type, setType] = React.useState("hospital");
  return (
    // blank tag is known as fragment
    <>
      <Form.Item
        label={type === "hospital" ? "Hospital Name" : "Organization Name"}
        name={type === "hospital" ? "hospitalName" : "organizationName"}
      >
        <Input />
      </Form.Item>

      <Form.Item name="owner" label="owner">
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email">
        <Input type="email" />
      </Form.Item>

      <Form.Item name="phone" label="Phone">
        <Input />
      </Form.Item>

      <Form.Item name="website" label="Website">
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password">
        <Input type="password" />
      </Form.Item>

      <Form.Item name="address" label="Address" className="col-span-2">
        <TextArea />
      </Form.Item>
    </>
  );
}

export default OrgHospitalForm;
