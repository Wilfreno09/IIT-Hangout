"use client";

import styles from "@/styles/Test.module.css";
import Input from "@/components/Input";

export default function test() {
  return (
    <div className={styles.page}>
      <form
        action=""
        method="post"
        autoComplete="off"
      
      >
        <Input type="text" name="test" id="test" label="ffff" onChange={} />
        <button>Submit</button>
      </form>
    </div>
  );
}
