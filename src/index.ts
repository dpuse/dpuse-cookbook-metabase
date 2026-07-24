// ── External Dependencies & Registrations
import type { ComponentReference } from '@dpuse/dpuse-shared/component';
import type { CookbookConfig, CookbookInterface } from '@dpuse/dpuse-shared/component/module/cookbook';

// ── Data
import config from '~/config.json';

// ── Presenters ───────────────────────────────────────────────────────────────────────────────────────────────────────

export default class MetabaseCookbook implements CookbookInterface {
    readonly config: CookbookConfig;

    constructor() {
        this.config = config as CookbookConfig;
    }

    // ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────

    // Operations - List. TODO: Is this needed? Is 'configPresentations.json' needed????
    list(): ComponentReference[] {
        return [];
    }

    // ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────
}
