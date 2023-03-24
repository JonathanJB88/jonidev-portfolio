import type { NextApiRequest, NextApiResponse } from 'next';

import { about, techSkills, projects, services, softSkills } from '../../data/data';

import { ISkill, IProject, IService } from '../../interfaces';

type Data = {
  about: string;
  techSkills: ISkill[];
  softSkills: ISkill[];
  projects: IProject[];
  services: IService[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ about, techSkills, projects, services, softSkills });
}
