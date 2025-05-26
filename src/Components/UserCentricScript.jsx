"use client"
import Script from "next/script"
const UserCentricScript = () => {
    return (
        <div>
            <Script
                src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
                strategy="beforeInteractive"
            />
            <Script
                id="usercentrics-cmp"
                src="https://web.cmp.usercentrics.eu/ui/loader.js"
                data-settings-id="JPPJ_XnYMatnNW"
                strategy="afterInteractive"
            />
        </div>
    )
}

export default UserCentricScript
