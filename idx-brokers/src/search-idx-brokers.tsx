import { Action, ActionPanel, List } from "@raycast/api";
import { brokers } from "./brokers";

const PROFILE_URL = "https://www.idx.co.id/id/anggota-bursa-dan-partisipan/profil-anggota-bursa";

export default function Command() {
  return (
    <List searchBarPlaceholder="Search by broker code or name">
      {brokers.map((broker) => {
        const profileUrl = `${PROFILE_URL}/${broker.code}`;
        return (
          <List.Item
            key={broker.code}
            title={broker.code}
            subtitle={broker.name}
            keywords={[broker.name, ...broker.name.split(/\s+/)]}
            actions={
              <ActionPanel>
                <Action.OpenInBrowser title="Open Broker Profile" url={profileUrl} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}
