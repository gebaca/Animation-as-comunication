// src/mocks/mock.ts

export const DEPARTMENT_NAME = 'Access Governance';

export type Resource = 'reporting' | 'financeOps' | 'userManagement';

export type Tier = 'viewer' | 'editor' | 'admin';

export type Severity = 'high' | 'medium';

export interface RecentChange {
  resource: Resource;
  previousTier: Tier | null;
  currentTier: Tier | null;
  severity: Severity;
  timestamp: string; // ISO date
}

export interface Member {
  id: string;
  name: string;
  initials: string;
  position: string; // cargo real, sin relación con los tiers de acceso
  recentChange?: RecentChange;
  accessMatrix: Record<Resource, Tier | null>;
}

export const members: Member[] = [
  {
    id: 'm1',
    name: 'Alice Chen',
    initials: 'AC',
    position: 'Financial Analyst',
    accessMatrix: {
      reporting: 'editor',
      financeOps: 'viewer',
      userManagement: null,
    },
  },
  {
    id: 'm2',
    name: 'Marco Rossi',
    initials: 'MR',
    position: 'IT Support Specialist',
    accessMatrix: {
      reporting: 'editor',
      financeOps: 'editor',
      userManagement: 'viewer',
    },
    recentChange: {
      resource: 'userManagement',
      previousTier: 'admin',
      currentTier: 'viewer',
      severity: 'high',
      timestamp: '2026-09-10T14:00:00Z',
    },
  },
  {
    id: 'm3',
    name: 'Priya Nair',
    initials: 'PN',
    position: 'Security Analyst',
    accessMatrix: {
      reporting: 'admin',
      financeOps: 'editor',
      userManagement: 'admin',
    },
  },
  {
    id: 'm4',
    name: 'Tom Becker',
    initials: 'TB',
    position: 'DevOps Engineer',
    accessMatrix: {
      financeOps: 'editor',
      userManagement: null,
      reporting: null,
    },
    recentChange: {
      resource: 'financeOps',
      previousTier: 'viewer',
      currentTier: 'editor',
      severity: 'medium',
      timestamp: '2026-09-10T12:30:00Z',
    },
  },
  {
    id: 'm5',
    name: 'Laura Mendez',
    initials: 'LM',
    position: 'Compliance Officer',
    accessMatrix: {
      reporting: 'viewer',
      userManagement: 'editor',
      financeOps: null,
    },
    recentChange: {
      resource: 'userManagement',
      previousTier: 'viewer',
      currentTier: 'editor',
      severity: 'medium',
      timestamp: '2026-09-10T10:00:00Z',
    },
  },
];

const TIER_RANK: Record<Tier, number> = {
  viewer: 1,
  editor: 2,
  admin: 3,
};

export function getPrimaryRole(member: Member): Tier | null {
  const tiers = Object.values(member.accessMatrix) as Tier[];
  if (tiers.length === 0) return null;

  return tiers.reduce((highest, current) =>
    TIER_RANK[current] > TIER_RANK[highest] ? current : highest
  );
}

export function getPermissionRows(member: Member) {
  return Object.entries(member.accessMatrix).map(([resource, tier]) => ({
    resource: resource as Resource,
    tier,
  }));
}

export function getTeamStats(memberList: Member[]) {
  const totalMembers = memberList.length;
  const adminCount = memberList.filter(
    (member) => getPrimaryRole(member) === 'admin'
  ).length;
  const recentChangesCount = memberList.filter(
    (member) => member.recentChange !== undefined
  ).length;

  return { totalMembers, adminCount, recentChangesCount };
}

// Últimos N cambios del equipo, ordenados del más reciente al más antiguo.
export function getRecentTeamChanges(memberList: Member[], limit = 4) {
  return memberList
    .filter((member) => member.recentChange !== undefined)
    .sort(
      (a, b) =>
        new Date(b.recentChange!.timestamp).getTime() -
        new Date(a.recentChange!.timestamp).getTime()
    )
    .slice(0, limit);
}

export function isAdmin(member: Member): boolean {
  return getPrimaryRole(member) === 'admin';
}

export function hasRecentChange(member: Member): boolean {
  return member.recentChange !== undefined;
}

export function searchMembers(
  memberList: Member[],
  text: string = '',
  onlyAdmins: boolean = false,
  onlyRecentChanges: boolean = false
): Member[] {
  const query = text.toLowerCase().trim();

  return memberList.filter((member) => {
    const matchesText =
      !query ||
      member.name.toLowerCase().startsWith(query) ||
      member.position.toLowerCase().startsWith(query);

    const matchesAdmin = !onlyAdmins || isAdmin(member);
    const matchesRecentChange = !onlyRecentChanges || hasRecentChange(member);

    return matchesText && matchesAdmin && matchesRecentChange;
  });
}
