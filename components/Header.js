import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="border-b-2 flec flex-row">
            <h1 className="py-4 px-4 font-bold test-3xl">Airdrop/Bulk Transfer</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
