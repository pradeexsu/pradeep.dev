// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Experince = {
  date: string;
  title: string;
  description: string;
};
type Data = {
  data: Experince[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        title: "Android Developer Intern",
        date: "Jul 2021 - Jan 2022",
        description: `Learned and Applied Advanced Concepts of Android including MVVM Architecture, API Integration, Jetpack Compose, Crashlytics, etc.
  Collaborate with cross-functional teams to design, develop, and ship new features.
  Maintaining Application by fixing bugs and improving application performance.`,
      },
      {
        title: "Android Developer Intern",
        date: "Jul 2021 - Jan 2022",
        description: `Learned and Applied Advanced Concepts of Android including MVVM Architecture, API Integration, Jetpack Compose, Crashlytics, etc.
  Collaborate with cross-functional teams to design, develop, and ship new features.
  Maintaining Application by fixing bugs and improving application performance.`,
      },
      {
        title: "Android Developer Intern",
        date: "Jul 2021 - Jan 2022",
        description: `Learned and Applied Advanced Concepts of Android including MVVM Architecture, API Integration, Jetpack Compose, Crashlytics, etc.
  Collaborate with cross-functional teams to design, develop, and ship new features.
  Maintaining Application by fixing bugs and improving application performance.`,
      },
      {
        title: "Android Developer Intern",
        date: "Jul 2021 - Jan 2022",
        description: `Learned and Applied Advanced Concepts of Android including MVVM Architecture, API Integration, Jetpack Compose, Crashlytics, etc.
  Collaborate with cross-functional teams to design, develop, and ship new features.
  Maintaining Application by fixing bugs and improving application performance.`,
      },
    ],
  });
}
