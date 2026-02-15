import { getPayload } from "payload";
import config from "@payload-config";

export async function getPayloadClient() {
  return getPayload({ config });
}

export async function getSiteSettings() {
  const payload = await getPayloadClient();
  return payload.findGlobal({ slug: "site-settings" });
}

export async function getSocialLinks() {
  const payload = await getPayloadClient();
  return payload.findGlobal({ slug: "social-links" });
}

export async function getNavigation() {
  const payload = await getPayloadClient();
  return payload.findGlobal({ slug: "navigation" });
}

export async function getExperiences() {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "experiences",
    sort: "order",
    limit: 100,
  });
  return result.docs;
}

export async function getProjects() {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "projects",
    sort: "order",
    limit: 100,
  });
  return result.docs;
}

export async function getSkills() {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "skills",
    sort: "order",
    limit: 100,
  });
  return result.docs;
}
