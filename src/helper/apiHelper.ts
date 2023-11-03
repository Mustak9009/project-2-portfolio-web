export const message = async () => {
  try {
    const res = await fetch("/api/message");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Something goingh wrong .....!!");
  }
};
export const messagePost = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const data = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ name, email, message }),
    });
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Something goingh wrong .....!!");
  }
};
export const socialPost = async ({
  github,
  instagram,
  youtube,
}: {
  github: string;
  instagram: string;
  youtube: string;
}) => {
  try {
    const data = await fetch("/api/social", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ github, instagram, youtube }),
    });
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Something goingh wrong .....!!");
  }
};
export const socialGet = async () => {
  try {
    const data = await fetch("/api/social");
    const res = await data.json();
    return res.socialLinks;
  } catch (err) {
    console.log(err);
    throw new Error("Something goingh wrong .....!!");
  }
};
export const project = async ({
  title,
  description,
  url,
  img,
}: {
  title: string;
  description: string;
  url: string;
  img: string;
}) => {
  try {
    const data = await fetch("/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, url, img }),
    });
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Something goingh wrong .....!!");
  }
};
export const projectGet = async () => {
  try {
    const data = await fetch("/api/project");
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Something goingh wrong .....!!");
  }
};
export const adminPosthandler = async ({password}:{password:string}) => {
  try {
    const data = await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ password }),
    });
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Something goingh wrong .....!!");
  }
};
