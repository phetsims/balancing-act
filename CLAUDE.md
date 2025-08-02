# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## PhET Balancing Act Simulation

Balancing Act is an educational simulation that teaches concepts of torque, balance, and mass through interactive activities. The simulation includes three screens: Intro, Balance Lab, and Game.

## Key Architecture

### Model-View Pattern
- **Model**: Core physics in `js/common/model/BalanceModel.js` and screen-specific models
  - `Plank.js` - Contains the torque equation (τ = r × F) calculations and physics
  - `Mass.js` - Base class for all objects that can be placed on the balance
  - Two main mass types: `ShapeMass` (geometric shapes) and `ImageMass` (visual representations)
- **View**: Scenery-based views in `js/*/view/` directories
  - Mass nodes correspond to mass model objects (e.g., `ImageMassNode.js`)
  - Model-view transform converts meters to screen units

### Screen Structure
1. **Intro Screen** (`js/intro/`) - Basic balance exploration
2. **Balance Lab Screen** (`js/balancelab/`) - Experiments with various masses
3. **Game Screen** (`js/game/`) - Challenges with balance/mass deduction
   - Note: Game screen is disabled in PhET-iO builds

### Key Constants
- Fulcrum height: 0.85 meters
- Plank height: 0.75 meters
- Layout bounds: 768 x 504 (fixed for PhET-iO compatibility)

## Common Development Commands

```bash
# Type checking
grunt type-check

# Linting (with auto-fix)
grunt lint --fix

# Build for development (transpile TypeScript)
grunt output-js-project --live

# Full build (creates single file)
grunt --brands=adapted-from-phet

# Build with specific brand
grunt --brands=phet
grunt --brands=phet-io
```

## Testing

The simulation uses QUnit for unit tests. Run tests by opening the test HTML files in a browser:
- `/balancing-act/balancing-act-tests.html` - Main test suite

## Important Patterns

### Mass Management
- Masses are tracked in `massList` observable array
- User-controlled masses tracked separately for physics calculations
- Mass disposal includes removing listeners to prevent memory leaks

### Game Challenge Generation
- `BalanceGameChallengeFactory` creates randomized, solvable challenges
- Maintains FIFO lists to avoid repeating similar challenges
- Three challenge types: balance, mass deduction, tip prediction

### Region Support
The simulation supports different cultural regions with corresponding human figures:
- usa, asia, africa, africaModest, latinAmerica, oceania
- Images stored in `images/[region]/` directories

## TypeScript Migration
The codebase is partially migrated to TypeScript. New code should be written in TypeScript where possible. Key TypeScript files:
- `*.ts` files for new development
- `tsconfig.json` extends PhET's common browser configuration