import { OrganizingCommittee } from "@/components/organizing-committtee";
import { ScientificCommittee } from "@/components/scientific-committee";
import { SupervisoryCommittee } from "@/components/supervisory-committee";
import React from "react";

export default function Organization() {
  return (
    <div>
      <SupervisoryCommittee />
      <ScientificCommittee />
      <OrganizingCommittee />
    </div>
  );
}
