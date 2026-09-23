# IDX Brokers

Search Indonesia Stock Exchange (IDX) brokers by their code or by name, and open a broker's profile on idx.co.id.

## Install

The extension is not in the Raycast Store. To install it from source, you need [Node.js](https://nodejs.org) and Raycast.

1. Clone the repository and build the extension:

	```sh
	git clone https://github.com/ariefrahmansyah/raycast-extensions.git
	cd raycast-extensions/idx-brokers
	npm install
	npm run build
	```

2. In Raycast, run **Import Extension** and select the `idx-brokers` folder.

## Use the command

1. Open Raycast and run **Search IDX Brokers**.
2. Type a broker code or any letter in the broker name.
3. Press **Enter** on a broker to open its profile page at `https://www.idx.co.id/id/anggota-bursa-dan-partisipan/profil-anggota-bursa/<code>`.

## Development

```sh
npm install
npm run dev
```

`npm run dev` loads the extension into Raycast and reloads it when you save a file.

## Disclaimer

This extension is not affiliated with, endorsed by, or sponsored by PT Bursa Efek Indonesia (Indonesia Stock Exchange) or any broker it lists.

"IDX" and "Indonesia Stock Exchange" are trademarks of PT Bursa Efek Indonesia. Broker names may be trademarks of their respective owners. The extension uses these names only to identify the exchange and its brokers. The [MIT license](../LICENSE) covers the source code only and grants no rights in these names.

Broker codes and names come from the public [IDX broker summary](https://www.idx.co.id/id/data-pasar/ringkasan-perdagangan/ringkasan-broker) and may be incomplete or out of date. The extension provides this information "as is", without warranty of any kind. For current information, refer to the IDX website. To report an error, open an issue.

Nothing in this extension is investment advice or a recommendation of any broker.
