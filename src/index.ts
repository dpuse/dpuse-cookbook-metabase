// ── External Dependencies & Registrations
import type { ComponentReferenceConfig, CookbookConfig, CookbookInterface } from '@dpuse/dpuse-shared';

// ── Data
import config from '~/config.json';

// ── Cookbook ─────────────────────────────────────────────────────────────────────────────────────────────────────────

export class Cookbook implements CookbookInterface {
    readonly config: CookbookConfig;

    constructor() {
        this.config = config as CookbookConfig;
    }

    // ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────

    // Operations - List. TODO: Is this needed? Is 'configPresentations.json' needed????
    list(): ComponentReferenceConfig[] {
        return [];
    }

    // ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────
}
