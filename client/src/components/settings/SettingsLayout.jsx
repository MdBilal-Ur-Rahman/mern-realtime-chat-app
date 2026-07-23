import { useState } from "react";

import SettingsSidebar from "./SettingsSidebar";
import ProfileSection from "./ProfileSection";
import AccountSection from "./AccountSection";
import AppearanceSection from "./AppearanceSection";
import PrivacySection from "./PrivacySection";
import LogoutSection from "./LogoutSection";

const SettingsLayout = () => {
  const [tab, setTab] = useState("profile");

  const renderSection = () => {
    switch (tab) {
      case "profile":
        return <ProfileSection />;

      case "account":
        return <AccountSection />;

      case "appearance":
        return <AppearanceSection />;

      case "privacy":
        return <PrivacySection />;

      case "logout":
        return <LogoutSection />;

      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">

      <div className="mx-auto flex max-w-7xl">

        <SettingsSidebar
          tab={tab}
          setTab={setTab}
        />

        <main className="flex-1 p-8">
          {renderSection()}
        </main>

      </div>

    </div>
  );
};

export default SettingsLayout;