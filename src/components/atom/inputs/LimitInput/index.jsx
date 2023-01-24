import React from "react";

function LimitInput(props) {
  return (
    <>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text text-amber-50">Insert Limit</span>
        </label>
        <div className="flex">
          <input
            type="number"
            placeholder="Limit"
            class="input input-bordered w-full max-w-xs text-accent mb-4"
            step="1"
            defaultValue="0"
            {...props}
          />
        </div>
      </div>
    </>
  );
}

export default LimitInput;
