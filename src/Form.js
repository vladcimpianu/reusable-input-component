import React from "react";
import Input from "./Input";

import "./styles.css";

export default function Form() {
  return (
    <form className="form">
      <Input
        label="Revenue Code"
        placeholder="Revenue Code"
        mandatory={true}
        disabled={false}
      />
      <Input
        label="Customer"
        placeholder="Customer"
        mandatory={true}
        disabled={false}
      />
      <Input
        label="Payment Details"
        placeholder="Payment Details"
        mandatory={false}
        disabled={true}
      />
      <Input
        label="Payment Amount (£)"
        placeholder="Payment Amount (£)"
        mandatory={false}
        disabled={true}
      />
    </form>
  );
}
