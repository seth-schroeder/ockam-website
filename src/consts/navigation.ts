import { TEAM_PATH, BLOG_PATH, MISSION_AND_VISION_PATH } from '@consts/paths';
import RocketIcon from '@assets/icons/rocket.svg';
import UsersIcon from '@assets/icons/users.svg';
import { GITHUB_REPO_OCKAM, DOCS } from '@consts/externalResources';

// eslint-disable-next-line import/prefer-default-export
export const NAV_MENU_ITEMS = [
  { text: 'Features', href: '/#features', isExternal: false },
  { text: 'Use Cases', href: '/#use-cases', isExternal: false },
  { text: 'Pricing', href: '/pricing', isExternal: false },
  {
    text: 'Team',
    children: [
      { text: 'Open Roles', href: TEAM_PATH, icon: UsersIcon, isExternal: false },
      {
        text: 'Our Mission & Vision',
        href: MISSION_AND_VISION_PATH,
        icon: RocketIcon,
        isExternal: false,
      },
    ],
  },
  {
    text: 'Blog',
    href: BLOG_PATH,
    isExternal: false,
  },
  {
    text: 'Docs',
    href: DOCS.href,
    isExternal: true,
  },
  {
    text: 'Source',
    href: GITHUB_REPO_OCKAM.href,
    icon: GITHUB_REPO_OCKAM.icon,
    isExternal: true,
  },
];
