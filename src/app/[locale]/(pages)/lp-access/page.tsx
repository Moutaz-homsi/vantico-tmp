import { redirect } from "next/navigation"

/**
 * The LP portal is a separate system. This route used to host a login form that
 * authenticated against the old Strapi backend and then did nothing with the
 * result; it is kept only so existing links and bookmarks still land somewhere
 * useful.
 */
const PORTAL_URL = "https://signin.vantico.com/account/login"

export default function LpAccess() {
	redirect(PORTAL_URL)
}
