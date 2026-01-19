export interface Subject {
  id: string;
  name: string;
  code: string;
  description: string;
  semester: number;
  branch: string;
  chapters: {
    number: number;
    title: string;
    topics: string[];
    driveLinks: string[];
  }[];
}

export const subjects: Subject[] = [
  {
    id: 'chemistry',
    name: 'Engineering Chemistry',
    code: 'BT-101',
    description: 'Fundamental concepts of chemistry for engineering applications',
    semester: 1,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Water – Analysis, Treatments and Industrial Applications',
        topics: [
          'Sources, Impurities',
          'Hardness & its units',
          'Determination of hardness by EDTA method',
          'Alkalinity & It\'s determination and related numerical problems'
        ],
        driveLinks: ['https://drive.google.com/file/d/example1/view']
      },
      {
        number: 2,
        title: 'Boiler problem & softening methods',
        topics: [
          'Boiler troubles (Sludge & Scale, Priming & Foaming, Boiler Corrosion, Caustic Embrittlement)',
          'Softening methods (Lime-Soda, Zeolite and Ion Exchange Methods)',
          'Related numerical problems'
        ],
        driveLinks: ['https://drive.google.com/file/d/example2/view']
      },
      {
        number: 3,
        title: 'Lubricants and Lubrication',
        topics: [
          'Introduction, Mechanism of lubrication',
          'Classification of lubricants',
          'Significance & determination of Viscosity and Viscosity Index',
          'Flash & Fire Points, Cloud & Pour Points',
          'Aniline Point, Acid Number, Saponification Number',
          'Steam Emulsification Number and related numerical problems'
        ],
        driveLinks: ['https://drive.google.com/file/d/example3/view']
      },
      {
        number: 4,
        title: 'Polymer & polymerization',
        topics: [
          'Introduction, types of polymerisation',
          'Classification, mechanism of polymerisation (Free radical & Ionic polymerization)',
          'Thermoplastic & Thermosetting polymers',
          'Elementary idea of Biodegradable polymers',
          'Preparation, properties & uses of polymers: PVC, PMMA, Teflon, Nylon 6, Nylon 6:6',
          'Polyester phenol formaldehyde, Urea-Formaldehyde, Buna N, Buna S',
          'Vulcanization of Rubber'
        ],
        driveLinks: ['https://drive.google.com/file/d/example4/view']
      },
      {
        number: 5,
        title: 'Phase equilibrium and Corrosion',
        topics: [
          'Phase diagram of single component system (Water)',
          'Phase diagram of binary Eutectic System (Cu-Ag)',
          'Corrosion: Types, Mechanisms & prevention'
        ],
        driveLinks: ['https://drive.google.com/file/d/example5/view']
      },
      {
        number: 6,
        title: 'Spectroscopic techniques and application',
        topics: [
          'Principle, Instrumentation & Applications',
          'Electronics spectroscopy',
          'Vibrational & Rotational Spectroscopy of diatomic molecules'
        ],
        driveLinks: ['https://drive.google.com/file/d/example6/view']
      },
      {
        number: 7,
        title: 'Periodic properties',
        topics: [
          'Effective Nuclear Charge',
          'Variations: S, P, d & f Orbital energies of atoms in periodic table',
          'Electronics Configuration',
          'Atomic & Ionic sizes',
          'Electron affinity & electro negativity',
          'Ploarizability & Oxidation States'
        ],
        driveLinks: ['https://drive.google.com/file/d/example7/view']
      }
    ]
  },
  {
    id: 'math1',
    name: 'Mathematics-I',
    code: 'BT-102',
    description: 'Advanced mathematical concepts for engineering applications',
    semester: 1,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Module 1: Calculus',
        topics: [
          'Rolle\'s theorem',
          'Mean Value theorems',
          'Expansion of functions by Mc. Laurin\'s and Taylor\'s for one variable',
          'Taylor\'s theorem for function of two variables',
          'Partial Differentiation',
          'Maxima & Minima (two and three variables)',
          'Method of Lagranges Multipliers'
        ],
        driveLinks: ['https://drive.google.com/file/d/example8/view']
      },
      {
        number: 2,
        title: 'Module 2: Calculus',
        topics: [
          'Definite Integral as a limit of a sum and Its application in summation of series',
          'Beta and Gamma functions and their properties',
          'Applications of definite integrals to evaluate surface areas and volumes of revolutions',
          'Multiple Integral, Change the order of the integration',
          'Applications of multiple integral for calculating area and volumes of the curves'
        ],
        driveLinks: ['https://drive.google.com/file/d/example9/view']
      },
      {
        number: 3,
        title: 'Module 3: Sequences and series',
        topics: [
          'Convergence of sequence and series, tests for convergence',
          'Power series, Taylor\'s series',
          'Series for exponential, trigonometric and logarithm functions',
          'Fourier series: Half range sine and cosine series',
          'Parseval\'s theorem'
        ],
        driveLinks: ['https://drive.google.com/file/d/example10/view']
      },
      {
        number: 4,
        title: 'Module 4: Vector Spaces',
        topics: [
          'Vector Space',
          'Vector Sub Space',
          'Linear Combination of Vectors',
          'Linearly Dependent, Linearly Independent',
          'Basis of a Vector Space',
          'Linear Transformations'
        ],
        driveLinks: ['https://drive.google.com/file/d/example11/view']
      },
      {
        number: 5,
        title: 'Module 5: Matrices',
        topics: [
          'Rank of a Matrix',
          'Solution of Simultaneous Linear Equations by Elementary Transformation',
          'Consistency of Equation',
          'Eigen Values and Eigen Vectors',
          'Diagonalization of Matrices',
          'Cayley-Hamilton theorem and its applications to find inverse'
        ],
        driveLinks: ['https://drive.google.com/file/d/example12/view']
      }
    ]
  },
  {
    id: 'english',
    name: 'English for Communication',
    code: 'BT-103',
    description: 'English language and communication skills for engineering students',
    semester: 1,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Identifying Common errors in writing',
        topics: [
          'Articles',
          'Subject-Verb Agreement',
          'Prepositions',
          'Active and Passive Voice',
          'Reported Speech: Direct and Indirect',
          'Sentence Structure'
        ],
        driveLinks: ['https://drive.google.com/file/d/example13/view']
      },
      {
        number: 2,
        title: 'Vocabulary building and Comprehension',
        topics: [
          'Acquaintance with prefixes and suffixes from foreign languages in English to form derivatives',
          'Synonyms, antonyms',
          'Reading comprehension'
        ],
        driveLinks: ['https://drive.google.com/file/d/example14/view']
      },
      {
        number: 3,
        title: 'Communication',
        topics: [
          'Introduction, Meaning and Significance',
          'Process of Communication',
          'Oral and Written Communication',
          '7 c\'s of Communication',
          'Barriers to Communication and Ways to overcome them',
          'Importance of Communication for Technical students',
          'Nonverbal communication'
        ],
        driveLinks: ['https://drive.google.com/file/d/example15/view']
      },
      {
        number: 4,
        title: 'Developing Writing Skills',
        topics: [
          'Planning, Drafting and Editing',
          'Precise Writing, Précis',
          'Technical definition and Technical description',
          'Report Writing: Features of writing a good Report',
          'Structure of a Formal Report',
          'Report of Trouble, Laboratory Report, Progress Report'
        ],
        driveLinks: ['https://drive.google.com/file/d/example16/view']
      },
      {
        number: 5,
        title: 'Business Correspondence',
        topics: [
          'Importance of Business Letters',
          'Parts and Layout',
          'Application, Contents of good Resume',
          'Guidelines for writing Resume',
          'Calling/ Sending Quotation, Order, Complaint',
          'E-mail and Tender'
        ],
        driveLinks: ['https://drive.google.com/file/d/example17/view']
      }
    ]
  },
  {
    id: 'bee',
    name: 'Basic Electrical & Electronics Engineering',
    code: 'BT-104',
    description: 'Fundamentals of electrical and electronics engineering',
    semester: 1,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'D.C. Circuits',
        topics: [
          'Voltage and current sources',
          'Dependent and independent sources',
          'Units and dimensions',
          'Source Conversion',
          'Ohm\'s Law',
          'Kirchhoff\'s Law',
          'Superposition theorem',
          'Thevenin\'s theorem',
          'Mesh & nodal analysis',
          'Star Delta transformation'
        ],
        driveLinks: ['https://drive.google.com/example7']
      },
      {
        number: 2,
        title: '1-phase AC Circuits',
        topics: [
          'Generation of sinusoidal AC voltage',
          'Average value, R.M.S. value, form factor and peak factor',
          'Concept of phasor',
          'Power factor',
          'Impedance and admittance',
          'Active, reactive and apparent power',
          'Analysis of R-L, R-C, R-L-C series & parallel circuit'
        ],
        driveLinks: ['https://drive.google.com/example8']
      },
      {
        number: 3,
        title: '3-phase AC Circuits',
        topics: [
          'Necessity and advantages of three phase systems',
          'Phase sequence',
          'Balanced and unbalanced supply and loads',
          'Line and phase values for balanced star and delta connections',
          'Power in balanced & unbalanced three-phase system'
        ],
        driveLinks: ['https://drive.google.com/example9']
      },
      {
        number: 4,
        title: 'Magnetic Circuits',
        topics: [
          'Basic definitions',
          'Magnetization characteristics of Ferro magnetic materials',
          'Self inductance and mutual inductance',
          'Energy in linear magnetic systems',
          'AC excitation in magnetic circuits',
          'Magnetic field produced by current carrying conductor',
          'Force on a current carrying conductor',
          'Induced voltage and laws of electromagnetic Induction'
        ],
        driveLinks: ['https://drive.google.com/example10']
      },
      {
        number: 5,
        title: 'Single phase transformer',
        topics: [
          'General construction',
          'Working principle',
          'E.m.f. equation',
          'Equivalent circuits',
          'Phasor diagram',
          'Voltage regulation',
          'Losses and efficiency',
          'Open circuit and short circuit test'
        ],
        driveLinks: ['https://drive.google.com/example11']
      },
      {
        number: 6,
        title: 'Electrical Machines',
        topics: [
          'Construction, Classification & Working Principle of DC machine',
          'Induction machine and synchronous machine',
          'Working principle of 3-Phase induction motor',
          'Concept of slip in 3-Phase induction motor',
          'Torque-slip characteristics',
          'Types of losses in electrical machines',
          'Applications of different machines'
        ],
        driveLinks: ['https://drive.google.com/example12']
      },
      {
        number: 7,
        title: 'Basic Electronics',
        topics: [
          'Number systems & Their conversion',
          'De morgan\'s theorem',
          'Logic Gates',
          'Half and full adder circuits',
          'R-S flip flop, J-K flip flop',
          'Introduction to Semiconductors',
          'Diodes and V-I characteristics',
          'Bipolar junction transistors (BJT)',
          'CC, CB & CE transistor configurations'
        ],
        driveLinks: ['https://drive.google.com/example13']
      }
    ]
  },
  {
    id: 'graphics',
    name: 'Engineering Graphics',
    code: 'BT-105',
    description: 'Technical drawing and visualization for engineering applications',
    semester: 1,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Engineering Drawing',
        topics: [
          'Principles of Engineering Graphics',
          'Drawing instruments',
          'Lettering',
          'Conic sections',
          'Rectangular Hyperbola',
          'Cycloid, Epicycloid, Hypocycloid',
          'Involute',
          'Scales – Plain, Diagonal and Vernier'
        ],
        driveLinks: ['https://drive.google.com/example14']
      },
      {
        number: 2,
        title: 'Orthographic Projections',
        topics: [
          'Principles of Orthographic Projections',
          'Conventions',
          'Projections of Points and lines',
          'Projections of planes',
          'Auxiliary Planes'
        ],
        driveLinks: ['https://drive.google.com/example15']
      },
      {
        number: 3,
        title: 'Projections of Regular Solids',
        topics: [
          'Solids inclined to both the Planes',
          'Auxiliary Views',
          'Annotation and dimensioning',
          'Floor plans with fixtures'
        ],
        driveLinks: ['https://drive.google.com/example16']
      },
      {
        number: 4,
        title: 'Sections and Sectional Views',
        topics: [
          'Right Angular Solids',
          'Prism, Cylinder, Pyramid, Cone',
          'Development of surfaces',
          'Sectional orthographic views'
        ],
        driveLinks: ['https://drive.google.com/example17']
      },
      {
        number: 5,
        title: 'Isometric Projections',
        topics: [
          'Principles of Isometric projection',
          'Isometric Scale',
          'Isometric Views',
          'Conventions',
          'Isometric Views of lines, Planes, Solids'
        ],
        driveLinks: ['https://drive.google.com/example18']
      }
    ]
  },
  {
    id: 'physics',
    name: 'Engineering Physics',
    code: 'BT-201',
    description: 'Advanced physics concepts for engineering applications',
    semester: 2,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Wave nature of particles and the Schrodinger equation',
        topics: [
          'Introduction to Quantum mechanics',
          'Wave nature of Particles',
          'Operators',
          'Time-dependent and time-independent Schrodinger equation for wavefunction',
          'Application: Particle in a One dimensional Box',
          'Born interpretation',
          'Free-particle wavefunction and wave-packets',
          'vg and vp relation',
          'Uncertainty principle'
        ],
        driveLinks: ['https://drive.google.com/file/d/example19/view']
      },
      {
        number: 2,
        title: 'Wave optics',
        topics: [
          'Huygens\' principle',
          'Superposition of waves and interference of light by wave front splitting and amplitude splitting',
          'Young\'s double slit experiment',
          'Newton\'s rings',
          'Michelson interferometer',
          'Mach-Zehnder interferometer',
          'Farunhofer diffraction from a single slit and a circular aperture',
          'The Rayleigh criterion for limit of resolution and its application to vision',
          'Diffraction gratings and their resolving power'
        ],
        driveLinks: ['https://drive.google.com/file/d/example20/view']
      },
      {
        number: 3,
        title: 'Introduction to solids',
        topics: [
          'Free electron theory of metals',
          'Fermi level of Intrinsic and extrinsic',
          'Density of states',
          'Bloch\'s theorem for particles in a periodic potential',
          'Kronig-Penney model(no derivation) and origin of energy bands',
          'V-I characteristics of PN junction',
          'Zener diode',
          'Solar Cell',
          'Hall Effect'
        ],
        driveLinks: ['https://drive.google.com/file/d/example21/view']
      },
      {
        number: 4,
        title: 'Lasers',
        topics: [
          'Einstein\'s theory of matter radiation interaction and A and B coefficients',
          'Amplification of light by population inversion',
          'Different types of lasers: gas lasers (He-Ne, CO2), solid-state lasers(ruby, Neodymium)',
          'Properties of laser beams: mono-chromaticity, coherence, directionality and brightness',
          'Laser speckles',
          'Applications of lasers in science, engineering and medicine',
          'Introduction to Optical fiber',
          'Acceptance angle and cone',
          'Numerical aperture',
          'V number',
          'Attenuation'
        ],
        driveLinks: ['https://drive.google.com/file/d/example22/view']
      },
      {
        number: 5,
        title: 'Electrostatics in vacuum',
        topics: [
          'Calculation of electric field and electrostatic potential for a charge distribution',
          'Electric displacement',
          'Basic Introduction to Dielectrics',
          'Gradient, Divergence and curl',
          'Stokes\' theorem',
          'Gauss Theorem',
          'Continuity equation for current densities',
          'Maxwell\'s equation in vacuum and non-conducting medium',
          'Poynting vector'
        ],
        driveLinks: ['https://drive.google.com/file/d/example23/view']
      }
    ]
  },
  {
    id: 'math2',
    name: 'Mathematics-II',
    code: 'BT-202',
    description: 'Advanced mathematical concepts for engineering applications',
    semester: 2,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Ordinary Differential Equations I',
        topics: [
          'Differential Equations of First Order and First Degree (Leibnitz linear, Bernoulli\'s, Exact)',
          'Differential Equations of First Order and Higher Degree',
          'Higher order differential equations with constants coefficients',
          'Homogeneous Linear Differential equations',
          'Simultaneous Differential Equations'
        ],
        driveLinks: ['https://drive.google.com/file/d/example24/view']
      },
      {
        number: 2,
        title: 'Ordinary differential Equations II',
        topics: [
          'Second order linear differential equations with variable coefficients',
          'Method of variation of parameters',
          'Power series solutions',
          'Legendre polynomials',
          'Bessel functions of the first kind and their properties'
        ],
        driveLinks: ['https://drive.google.com/file/d/example25/view']
      },
      {
        number: 3,
        title: 'Partial Differential Equations',
        topics: [
          'Formulation of Partial Differential equations',
          'Linear and Non-Linear Partial Differential Equations',
          'Homogeneous Linear Partial Differential Equations with Constants Coefficients'
        ],
        driveLinks: ['https://drive.google.com/file/d/example26/view']
      },
      {
        number: 4,
        title: 'Functions of Complex Variable',
        topics: [
          'Functions of Complex Variables: Analytic Functions',
          'Harmonic Conjugate',
          'Cauchy-Riemann Equations (without proof)',
          'Line Integral',
          'Cauchy-Goursat theorem (without proof)',
          'Cauchy Integral formula (without proof)',
          'Singular Points',
          'Poles & Residues',
          'Residue Theorem',
          'Application of Residues theorem for Evaluation of Real Integral (Unit Circle)'
        ],
        driveLinks: ['https://drive.google.com/file/d/example27/view']
      },
      {
        number: 5,
        title: 'Vector Calculus',
        topics: [
          'Differentiation of Vectors',
          'Scalar and vector point function',
          'Gradient',
          'Geometrical meaning of gradient',
          'Directional Derivative',
          'Divergence and Curl',
          'Line Integral',
          'Surface Integral and Volume Integral',
          'Gauss Divergence',
          'Stokes and Green theorems'
        ],
        driveLinks: ['https://drive.google.com/file/d/example28/view']
      }
    ]
  },
  {
    id: 'mechanical',
    name: 'Basic Mechanical Engineering',
    code: 'BT-203',
    description: 'Fundamentals of mechanical engineering concepts',
    semester: 2,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Materials',
        topics: [
          'Classification of engineering material',
          'Composition of Cast iron and Carbon steels',
          'Iron Carbon diagram',
          'Alloy steels their applications',
          'Mechanical properties like strength, hardness, toughness, ductility, brittleness, malleability etc.',
          'Tensile test- Stress-strain diagram of ductile and brittle materials',
          'Hooks law and modulus of elasticity',
          'Hardness and Impact testing of materials',
          'BHN'
        ],
        driveLinks: ['https://drive.google.com/file/d/example29/view']
      },
      {
        number: 2,
        title: 'Measurement',
        topics: [
          'Concept of measurements',
          'Errors in measurement',
          'Temperature, Pressure, Velocity, Flow strain, Force and torque measurement',
          'Vernier caliper',
          'Micrometer',
          'Dial gauge',
          'Slip gauge',
          'Sine-bar and Combination set'
        ],
        driveLinks: ['https://drive.google.com/file/d/example30/view']
      },
      {
        number: 3,
        title: 'Production Engineering',
        topics: [
          'Elementary theoretical aspects of production processes like casting, carpentry, welding etc',
          'Introduction to Lathe and Drilling machines and their various operations'
        ],
        driveLinks: ['https://drive.google.com/file/d/example31/view']
      },
      {
        number: 4,
        title: 'Fluids',
        topics: [
          'Fluid properties pressure, density and viscosity etc.',
          'Types of fluids',
          'Newton\'s law of viscosity',
          'Pascal\'s law',
          'Bernoulli\'s equation for incompressible fluids',
          'Only working principle of Hydraulic machines, pumps, turbines',
          'Reciprocating pumps'
        ],
        driveLinks: ['https://drive.google.com/file/d/example32/view']
      },
      {
        number: 5,
        title: 'Thermodynamics',
        topics: [
          'Thermodynamic system, properties, state, process',
          'Zeroth, First and second law of thermodynamics',
          'Thermodynamic processes at constant pressure, volume, enthalpy & entropy'
        ],
        driveLinks: ['https://drive.google.com/file/d/example33/view']
      },
      {
        number: 6,
        title: 'Steam Engineering',
        topics: [
          'Classification and working of boilers',
          'Mountings and accessories of boilers',
          'Efficiency and performance analysis',
          'Natural and artificial draught',
          'Steam properties',
          'Use of steam tables'
        ],
        driveLinks: ['https://drive.google.com/file/d/example34/view']
      },
      {
        number: 7,
        title: 'Reciprocating Machines',
        topics: [
          'Working principle of steam Engine',
          'Carnot, Otto, Diesel and Dual cycles P-V & T-S diagrams and its efficiency',
          'Working of Two stroke & Four stroke Petrol & Diesel engines',
          'Working principle of compressor'
        ],
        driveLinks: ['https://drive.google.com/file/d/example35/view']
      }
    ]
  },
  {
    id: 'civil',
    name: 'Basic Civil Engineering & Mechanics',
    code: 'BT-204',
    description: 'Fundamentals of civil engineering and mechanics',
    semester: 2,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Building Materials & Construction',
        topics: [
          'Stones, bricks, cement, lime, timber-types, properties, test & uses',
          'Laboratory tests concrete and mortar Materials',
          'Workability, Strength properties of Concrete',
          'Nominal proportion of Concrete preparation of concrete, compaction, curing',
          'Elements of Building Construction',
          'Foundations conventional spread footings, RCC footings',
          'Brick masonry walls, plastering and pointing',
          'Floors, roofs, Doors, windows, lintels',
          'Staircases – types and their suitability'
        ],
        driveLinks: ['https://drive.google.com/file/d/example36/view']
      },
      {
        number: 2,
        title: 'Surveying',
        topics: [
          'Introduction to surveying Instruments – levels, thedolites, plane tables and related devices',
          'Electronic surveying instruments etc.',
          'Measurement of distances – conventional and EDM methods',
          'Measurement of directions by different methods',
          'Measurement of elevations by different methods',
          'Reciprocal leveling'
        ],
        driveLinks: ['https://drive.google.com/file/d/example37/view']
      },
      {
        number: 3,
        title: 'Mapping and Applications',
        topics: [
          'Mapping details and contouring',
          'Profile Cross sectioning and measurement of areas',
          'Volumes, application of measurements in quantity computations',
          'Survey stations',
          'Introduction of remote sensing and its applications'
        ],
        driveLinks: ['https://drive.google.com/file/d/example38/view']
      },
      {
        number: 4,
        title: 'Engineering Mechanics - Forces and Equilibrium',
        topics: [
          'Graphical and Analytical Treatment of Concurrent and non-concurrent Co-planner forces',
          'Free Diagram',
          'Force Diagram and Bow\'s notations',
          'Application of Equilibrium Concepts: Analysis of plane Trusses',
          'Method of joints',
          'Method of Sections',
          'Frictional force in equilibrium problems'
        ],
        driveLinks: ['https://drive.google.com/file/d/example39/view']
      },
      {
        number: 5,
        title: 'Engineering Mechanics - Advanced Concepts',
        topics: [
          'Centre of Gravity and moment of Inertia',
          'Centroid and Centre of Gravity',
          'Moment Inertia of Area and Mass',
          'Radius of Gyration',
          'Introduction to product of Inertia and Principle Axes',
          'Support Reactions',
          'Shear force and bending moment Diagram for Cantilever & simply supported beam with concentrated, distributed load and Couple'
        ],
        driveLinks: ['https://drive.google.com/file/d/example40/view']
      }
    ]
  },
  {
    id: 'computer',
    name: 'Basic Computer Engineering',
    code: 'BT-205',
    description: 'Fundamentals of computer engineering and programming',
    semester: 2,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Computer Fundamentals and Operating System',
        topics: [
          'Computer: Definition, Classification, Organization',
          'CPU, register, Bus architecture, Instruction set',
          'Memory & Storage Systems',
          'I/O Devices',
          'System & Application Software',
          'Computer Application in e-Business, Bio-Informatics, health Care, Remote Sensing & GIS, Meteorology and Climatology, Computer Gaming, Multimedia and Animation',
          'Operating System: Definition, Function, Types',
          'Management of File, Process & Memory',
          'Introduction to MS word, MS powerpoint, MS Excel'
        ],
        driveLinks: ['https://drive.google.com/file/d/example41/view']
      },
      {
        number: 2,
        title: 'Programming Fundamentals',
        topics: [
          'Introduction to Algorithms, Complexities and Flowchart',
          'Introduction to Programming',
          'Categories of Programming Languages',
          'Program Design',
          'Programming Paradigms',
          'Characteristics or Concepts of OOP',
          'Procedure Oriented Programming VS object oriented Programming',
          'Introduction to C++: Character Set, Tokens, Precedence and Associativity',
          'Program Structure, Data Types, Variables, Operators, Expressions, Statements and control structures',
          'I/O operations, Array, Functions'
        ],
        driveLinks: ['https://drive.google.com/file/d/example42/view']
      },
      {
        number: 3,
        title: 'Object Oriented Programming',
        topics: [
          'Object & Classes',
          'Scope Resolution Operator',
          'Constructors & Destructors',
          'Friend Functions',
          'Inheritance',
          'Polymorphism',
          'Overloading Functions & Operators',
          'Types of Inheritance',
          'Virtual functions',
          'Introduction to Data Structures'
        ],
        driveLinks: ['https://drive.google.com/file/d/example43/view']
      },
      {
        number: 4,
        title: 'Computer Networking and Security',
        topics: [
          'Computer Networking: Introduction, Goals, ISO-OSI Model',
          'Functions of Different Layers',
          'Internetworking Concepts, Devices, TCP/IP Model',
          'Introduction to Internet, World Wide Web, E-commerce',
          'Computer Security Basics: Introduction to viruses, worms, malware, Trojans, Spyware and Anti-Spyware Software',
          'Different types of attacks like Money Laundering, Information Theft, Cyber Pornography, Email spoofing, Denial of Service (DoS), Cyber Stalking, Logic bombs, Hacking Spamming, Cyber Defamation, pharming',
          'Security measures Firewall',
          'Computer Ethics & Good Practices',
          'Introduction of Cyber Laws about Internet Fraud',
          'Good Computer Security Habits'
        ],
        driveLinks: ['https://drive.google.com/file/d/example44/view']
      },
      {
        number: 5,
        title: 'Database and Cloud Computing',
        topics: [
          'Data base Management System: Introduction',
          'File oriented approach and Database approach',
          'Data Models',
          'Architecture of Database System',
          'Data independence',
          'Data dictionary',
          'DBA',
          'Primary Key',
          'Data definition language and Manipulation Languages',
          'Cloud computing: definition, cloud infrastructure',
          'Cloud segments or service delivery models (IaaS, PaaS and SaaS)',
          'Cloud deployment models/ types of cloud (public, private, community and hybrid clouds)',
          'Pros and Cons of cloud computing'
        ],
        driveLinks: ['https://drive.google.com/file/d/example45/view']
      }
    ]
  },
  {
    id: 'energy',
    name: 'Energy & Environmental Engineering',
    code: 'ES-301',
    description: 'Study of energy systems, environmental engineering, and sustainability',
    semester: 3,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Energy Science',
        topics: [
          'Introduction to energy systems and resources',
          'Introduction to Energy, sustainability & the environment',
          'Overview of energy systems, sources, transformations, efficiency, and storage',
          'Fossil fuels (coal, oil, oil-bearing shale and sands, coal gasification) - past, present & future',
          'Remedies & alternatives for fossil fuels - biomass, wind, solar, nuclear, wave, tidal and hydrogen',
          'Sustainability and environmental trade-offs of different energy systems',
          'Possibilities for energy storage or regeneration (Ex. Pumped storage hydro power projects, superconductor-based energy storages, high efficiency batteries)'
        ],
        driveLinks: ['https://drive.google.com/file/d/example46/view']
      },
      {
        number: 2,
        title: 'Ecosystems',
        topics: [
          'Concept of an ecosystem',
          'Structure and function of an ecosystem',
          'Producers, consumers and decomposers',
          'Energy flow in the ecosystem',
          'Ecological succession',
          'Food chains, food webs and ecological pyramids',
          'Introduction, types, characteristic features, structure and function of the following ecosystem:',
          'Forest ecosystem',
          'Grassland ecosystem',
          'Desert ecosystem',
          'Aquatic ecosystems (ponds, streams, lakes, rivers, oceans, estuaries)'
        ],
        driveLinks: ['https://drive.google.com/file/d/example47/view']
      },
      {
        number: 3,
        title: 'Biodiversity and its conservation',
        topics: [
          'Introduction – Definition: genetic, species and ecosystem diversity',
          'Biogeographical classification of India',
          'Value of biodiversity: consumptive use, productive use, social, ethical, aesthetic and option values',
          'Biodiversity at global, National and local levels',
          'India as a mega-diversity nation',
          'Hot-sports of biodiversity',
          'Threats to biodiversity: habitat loss, poaching of wildlife, man-wildlife conflicts',
          'Endangered and endemic species of India',
          'Conservation of biodiversity: In-situ and Ex-situ conservation of biodiversity'
        ],
        driveLinks: ['https://drive.google.com/file/d/example48/view']
      },
      {
        number: 4,
        title: 'Environmental Pollution',
        topics: [
          'Definition, Cause, effects and control measures of:',
          'Air pollution',
          'Water pollution',
          'Soil pollution',
          'Marine pollution',
          'Noise pollution',
          'Thermal pollution',
          'Nuclear hazards',
          'Solid waste Management: Causes, effects and control measures of urban and industrial wastes',
          'Role of an individual in prevention of pollution',
          'Pollution case studies',
          'Disaster management: floods, earthquake, cyclone and landslides'
        ],
        driveLinks: ['https://drive.google.com/file/d/example49/view']
      },
      {
        number: 5,
        title: 'Social Issues and the Environment',
        topics: [
          'From Unsustainable to Sustainable development',
          'Urban problems related to energy',
          'Water conservation, rain water harvesting, watershed management',
          'Resettlement and rehabilitation of people; its problems and concerns',
          'Environmental ethics: Issues and possible solutions',
          'Climate change, global warming, acid rain, ozone layer depletion',
          'Nuclear accidents and holocaust',
          'Wasteland reclamation',
          'Consumerism and waste products',
          'Environment Protection Act',
          'Air (Prevention and Control of Pollution) Act',
          'Water (Prevention and control of Pollution) Act',
          'Wildlife Protection Act',
          'Forest Conservation Act',
          'Issues involved in enforcement of environmental legislation',
          'Public awareness'
        ],
        driveLinks: ['https://drive.google.com/file/d/example50/view']
      }
    ]
  },
  {
    id: 'discrete',
    name: 'Discrete Structure',
    code: 'CS-302',
    description: 'Study of discrete mathematical structures and their applications in computer science',
    semester: 3,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Set Theory, Relation, Function, Theorem Proving Techniques',
        topics: [
          'Set Theory: Definition of sets, countable and uncountable sets, Venn Diagrams',
          'Proofs of some general identities on sets',
          'Relation: Definition, types of relation, composition of relations',
          'Pictorial representation of relation',
          'Equivalence relation, Partial ordering relation',
          'Job-Scheduling problem',
          'Function: Definition, type of functions',
          'One to one, into and onto function',
          'Inverse function, composition of functions',
          'Recursively defined functions',
          'Pigeonhole principle',
          'Theorem proving Techniques: Mathematical induction, Proof by contradiction'
        ],
        driveLinks: ['https://drive.google.com/file/d/example51/view']
      },
      {
        number: 2,
        title: 'Algebraic Structures',
        topics: [
          'Definition, Properties, types: Semi Groups, Monoid, Groups',
          'Abelian group, properties of groups',
          'Subgroup, cyclic groups, Cosets, factor group',
          'Permutation groups, Normal subgroup',
          'Homomorphism and isomorphism of Groups',
          'Example and standard results',
          'Rings and Fields: definition and standard results'
        ],
        driveLinks: ['https://drive.google.com/file/d/example52/view']
      },
      {
        number: 3,
        title: 'Propositional Logic and Finite State Machines',
        topics: [
          'Proposition, First order logic',
          'Basic logical operation, truth tables',
          'Tautologies, Contradictions',
          'Algebra of Proposition',
          'Logical implications, logical equivalence',
          'Predicates, Normal Forms',
          'Universal and existential quantifiers',
          'Introduction to finite state machine',
          'Finite state machines as models of physical system equivalence machines',
          'Finite state machines as language recognizers'
        ],
        driveLinks: ['https://drive.google.com/file/d/example53/view']
      },
      {
        number: 4,
        title: 'Graph Theory',
        topics: [
          'Introduction and basic terminology of graphs',
          'Planer graphs, Multigraphs and weighted graphs',
          'Isomorphic graphs',
          'Paths, Cycles and connectivity',
          'Shortest path in weighted graph',
          'Introduction to Eulerian paths and circuits',
          'Hamiltonian paths and circuits',
          'Graph coloring, chromatic number',
          'Isomorphism and Homomorphism of graphs'
        ],
        driveLinks: ['https://drive.google.com/file/d/example54/view']
      },
      {
        number: 5,
        title: 'Posets, Hasse Diagram, Lattices and Combinatorics',
        topics: [
          'Introduction, ordered set',
          'Hasse diagram of partially ordered set',
          'Isomorphic ordered set, well ordered set',
          'Properties of Lattices',
          'Bounded and complemented lattices',
          'Combinatorics: Introduction',
          'Permutation and combination',
          'Binomial Theorem',
          'Multimonial Coefficients',
          'Recurrence Relation and Generating Function',
          'Introduction to Recurrence Relation and Recursive algorithms',
          'Linear recurrence relations with constant coefficients',
          'Homogeneous solutions, Particular solutions, Total solutions',
          'Generating functions',
          'Solution by method of generating functions'
        ],
        driveLinks: ['https://drive.google.com/file/d/example55/view']
      }
    ]
  },
  {
    id: 'datastructure',
    name: 'Data Structure',
    code: 'CS-303',
    description: 'Study of fundamental data structures and their implementations',
    semester: 3,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Review of C programming and Introduction to Data Structure',
        topics: [
          'Review of C programming language',
          'Introduction to Data Structure: Concepts of Data and Information',
          'Classification of Data structures',
          'Abstract Data Types',
          'Implementation aspects: Memory representation',
          'Data structures operations and its cost estimation',
          'Introduction to linear data structures- Arrays',
          'Linked List: Representation of linked list in memory',
          'Different implementation of linked list',
          'Circular linked list, doubly linked list',
          'Application of linked list: polynomial manipulation using linked list'
        ],
        driveLinks: ['https://drive.google.com/file/d/example56/view']
      },
      {
        number: 2,
        title: 'Stacks and Queues',
        topics: [
          'Stacks as ADT',
          'Different implementation of stack',
          'Multiple stacks',
          'Application of Stack: Conversion of infix to postfix notation using stack',
          'Evaluation of postfix expression',
          'Recursion',
          'Queues as ADT',
          'Different implementation of queue',
          'Circular queue',
          'Concept of Dqueue and Priority Queue',
          'Queue simulation',
          'Application of queues'
        ],
        driveLinks: ['https://drive.google.com/file/d/example57/view']
      },
      {
        number: 3,
        title: 'Trees',
        topics: [
          'Definitions - Height, depth, order, degree etc.',
          'Binary Search Tree - Operations, Traversal, Search',
          'AVL Tree',
          'Heap',
          'Applications and comparison of various types of tree',
          'Introduction to forest',
          'Multi-way Tree',
          'B tree',
          'B+ tree',
          'B* tree',
          'Red-black tree'
        ],
        driveLinks: ['https://drive.google.com/file/d/example58/view']
      },
      {
        number: 4,
        title: 'Graphs',
        topics: [
          'Introduction',
          'Classification of graph: Directed and Undirected graphs',
          'Representation',
          'Graph Traversal: Depth First Search (DFS), Breadth First Search (BFS)',
          'Graph algorithm: Minimum Spanning Tree (MST)- Kruskal, Prim\'s algorithms',
          'Dijkstra\'s shortest path algorithm',
          'Comparison between different graph algorithms',
          'Application of graphs'
        ],
        driveLinks: ['https://drive.google.com/file/d/example59/view']
      },
      {
        number: 5,
        title: 'Sorting, Searching, Hashing & Indexing',
        topics: [
          'Sorting: Introduction',
          'Sort methods: Bubble Sort, Quick sort, Selection sort, Heap sort, Insertion sort, Shell sort, Merge sort and Radix sort',
          'Comparison of various sorting techniques',
          'Searching: Basic Search Techniques: Sequential search, Binary search',
          'Comparison of search methods',
          'Hashing & Indexing',
          'Case Study: Application of various data structures in operating system, DBMS etc.'
        ],
        driveLinks: ['https://drive.google.com/file/d/example60/view']
      }
    ]
  },
  {
    id: 'digital',
    name: 'Digital Systems',
    code: 'CS-304',
    description: 'Study of digital logic design and digital systems',
    semester: 3,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Number Systems and Boolean Algebra',
        topics: [
          'Review of number systems and number base conversions',
          'Binary codes',
          'Boolean algebra',
          'Boolean functions',
          'Logic gates',
          'Simplification of Boolean functions',
          'Karnaugh map methods',
          'SOP-POS simplification',
          'NAND-NOR implementation'
        ],
        driveLinks: ['https://drive.google.com/file/d/example61/view']
      },
      {
        number: 2,
        title: 'Combinational Logic',
        topics: [
          'Half adder, Half subtractor',
          'Full adder, Full subtractor',
          'Look-ahead carry generator',
          'BCD adder',
          'Series and parallel addition',
          'Multiplexer – demultiplexer',
          'Encoder-decoder',
          'Arithmetic circuits',
          'ALU'
        ],
        driveLinks: ['https://drive.google.com/file/d/example62/view']
      },
      {
        number: 3,
        title: 'Sequential Logic',
        topics: [
          'Flip flops: D, T, S-R, J-K Master-Slave',
          'Racing condition',
          'Edge & Level triggered circuits',
          'Shift registers',
          'Asynchronous and synchronous counters',
          'Their types and state diagrams',
          'Semiconductor memories',
          'Introduction to digital ICs 2716, 2732 etc. & their address decoding',
          'Modern trends in semiconductor memories such as DRAM, FLASH RAM etc.',
          'Designing with ROM and PLA'
        ],
        driveLinks: ['https://drive.google.com/file/d/example63/view']
      },
      {
        number: 4,
        title: 'A/D & D/A Convertors and Multivibrators',
        topics: [
          'Introduction to A/D & D/A convertors & their types',
          'Sample and hold circuits',
          'Voltage to Frequency & Frequency to Voltage conversion',
          'Multivibrators: Bistable, Monostable, Astable',
          'Schmitt trigger',
          'IC 555 & Its applications',
          'TTL, PMOS, CMOS and NMOS logic',
          'Interfacing between TTL to MOS'
        ],
        driveLinks: ['https://drive.google.com/file/d/example64/view']
      },
      {
        number: 5,
        title: 'Digital Communication',
        topics: [
          'Introduction to Digital Communication',
          'Nyquist sampling theorem',
          'Time division multiplexing',
          'PCM',
          'Quantization error',
          'Introduction to BPSK & BFSK modulation schemes',
          'Shannon\'s theorem for channel capacity'
        ],
        driveLinks: ['https://drive.google.com/file/d/example65/view']
      }
    ]
  },
  {
    id: 'oop',
    name: 'Object Oriented Programming & Methodology',
    code: 'CS-305',
    description: 'Study of object-oriented programming concepts and methodologies',
    semester: 3,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Object Oriented Thinking & Programming',
        topics: [
          'Comparison with Procedural Programming',
          'Features of Object oriented paradigm',
          'Merits and demerits of OO methodology',
          'Object model',
          'Elements of OOPS',
          'IO processing'
        ],
        driveLinks: ['https://drive.google.com/file/d/example66/view']
      },
      {
        number: 2,
        title: 'Encapsulation and Data Abstraction',
        topics: [
          'Concept of Objects: State, Behavior & Identity of an object',
          'Classes: identifying classes and candidates for Classes',
          'Attributes and Services',
          'Access modifiers',
          'Static members of a Class',
          'Instances',
          'Message passing',
          'Construction and destruction of Objects'
        ],
        driveLinks: ['https://drive.google.com/file/d/example67/view']
      },
      {
        number: 3,
        title: 'Relationships and Inheritance',
        topics: [
          'Relationships – Inheritance: purpose and its types',
          '\'is a\' relationship',
          'Association',
          'Aggregation',
          'Concept of interfaces',
          'Abstract classes'
        ],
        driveLinks: ['https://drive.google.com/file/d/example68/view']
      },
      {
        number: 4,
        title: 'Polymorphism',
        topics: [
          'Introduction',
          'Method Overriding & Overloading',
          'Static and run time Polymorphism'
        ],
        driveLinks: ['https://drive.google.com/file/d/example69/view']
      },
      {
        number: 5,
        title: 'Advanced Concepts and Case Studies',
        topics: [
          'Strings',
          'Exceptional handling',
          'Introduction of Multi-threading',
          'Data collections',
          'Case study like: ATM',
          'Library management system'
        ],
        driveLinks: ['https://drive.google.com/file/d/example70/view']
      }
    ]
  },
  {
    id: 'math3',
    name: 'Mathematics-III',
    code: 'BT-401',
    description: 'Advanced mathematical concepts including numerical methods, transform calculus, and probability',
    semester: 4,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Numerical Methods – 1',
        topics: [
          'Solution of polynomial and transcendental equations',
          'Bisection method',
          'Newton-Raphson method',
          'Regula-Falsi method',
          'Finite differences',
          'Relation between operators',
          'Interpolation using Newton\'s forward and backward difference formulae',
          'Interpolation with unequal intervals: Newton\'s divided difference',
          'Lagrange\'s formulae'
        ],
        driveLinks: ['https://drive.google.com/file/d/example71/view']
      },
      {
        number: 2,
        title: 'Numerical Methods – 2',
        topics: [
          'Numerical Differentiation',
          'Numerical integration: Trapezoidal rule',
          'Simpson\'s 1/3rd and 3/8 rules',
          'Solution of Simultaneous Linear Algebraic Equations by:',
          'Gauss\'s Elimination',
          'Gauss\'s Jordan',
          'Crout\'s methods',
          'Jacobi\'s method',
          'Gauss-Seidal method',
          'Relaxation method'
        ],
        driveLinks: ['https://drive.google.com/file/d/example72/view']
      },
      {
        number: 3,
        title: 'Numerical Methods – 3',
        topics: [
          'Ordinary differential equations: Taylor\'s series',
          'Euler and modified Euler\'s methods',
          'RungeKutta method of fourth order for solving first and second order equations',
          'Milne\'s and Adam\'s predicator-corrector methods',
          'Partial differential equations',
          'Finite difference solution two dimensional Laplace equation and Poission equation',
          'Implicit and explicit methods for one dimensional heat equation',
          'Bender-Schmidt and Crank-Nicholson methods',
          'Finite difference explicit method for wave equation'
        ],
        driveLinks: ['https://drive.google.com/file/d/example73/view']
      },
      {
        number: 4,
        title: 'Transform Calculus',
        topics: [
          'Laplace Transform',
          'Properties of Laplace Transform',
          'Laplace transform of periodic functions',
          'Finding inverse Laplace transform by different methods',
          'Convolution theorem',
          'Evaluation of integrals by Laplace transform',
          'Solving ODEs by Laplace Transform method',
          'Fourier transforms'
        ],
        driveLinks: ['https://drive.google.com/file/d/example74/view']
      },
      {
        number: 5,
        title: 'Concept of Probability',
        topics: [
          'Probability Mass function',
          'Probability Density Function',
          'Discrete Distribution: Binomial, Poisson\'s',
          'Continuous Distribution: Normal Distribution',
          'Exponential Distribution'
        ],
        driveLinks: ['https://drive.google.com/file/d/example75/view']
      }
    ]
  },
  {
    id: 'algorithm',
    name: 'Analysis Design of Algorithm',
    code: 'CS-402',
    description: 'Study of algorithm design techniques and analysis methods',
    semester: 4,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction and Divide & Conquer',
        topics: [
          'Algorithms, Designing algorithms, analyzing algorithms',
          'Asymptotic notations',
          'Heap and heap sort',
          'Introduction to divide and conquer technique',
          'Analysis, design and comparison of various algorithms',
          'Binary search',
          'Merge sort',
          'Quick sort',
          'Strassen\'s matrix multiplication'
        ],
        driveLinks: ['https://drive.google.com/file/d/example76/view']
      },
      {
        number: 2,
        title: 'Greedy Strategy',
        topics: [
          'Study of Greedy strategy',
          'Optimal merge patterns',
          'Huffman coding',
          'Minimum spanning trees',
          'Knapsack problem',
          'Job sequencing with deadlines',
          'Single source shortest path algorithm'
        ],
        driveLinks: ['https://drive.google.com/file/d/example77/view']
      },
      {
        number: 3,
        title: 'Dynamic Programming',
        topics: [
          'Concept of dynamic programming',
          '0/1 knapsack',
          'Multistage graph',
          'Reliability design',
          'Floyd-Warshall algorithm'
        ],
        driveLinks: ['https://drive.google.com/file/d/example78/view']
      },
      {
        number: 4,
        title: 'Backtracking and Branch & Bound',
        topics: [
          'Backtracking concept',
          '8 queen\'s problem',
          'Hamiltonian cycle',
          'Graph coloring problem',
          'Introduction to branch & bound method',
          'Traveling salesman problem',
          'Lower bound theory',
          'Introduction to parallel algorithms'
        ],
        driveLinks: ['https://drive.google.com/file/d/example79/view']
      },
      {
        number: 5,
        title: 'Trees, Graphs and NP-Completeness',
        topics: [
          'Binary search trees',
          'Height balanced trees',
          '2-3 trees',
          'B-trees',
          'Basic search and traversal techniques for trees and graphs',
          'In order, preorder, postorder',
          'DFS, BFS',
          'NP-completeness'
        ],
        driveLinks: ['https://drive.google.com/file/d/example80/view']
      }
    ]
  },
  {
    id: 'software',
    name: 'Software Engineering',
    code: 'CS-403',
    description: 'Study of software development processes and methodologies',
    semester: 4,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'The Software Product and Software Process',
        topics: [
          'Software Product and Process Characteristics',
          'Software Process Models',
          'Linear Sequential Model',
          'Prototyping Model',
          'RAD Model',
          'Evolutionary Process Models',
          'Incremental Model',
          'Spiral Model',
          'Component Assembly Model',
          'RUP and Agile processes',
          'Software Process customization and improvement',
          'CMM',
          'Product and Process Metrics'
        ],
        driveLinks: ['https://drive.google.com/file/d/example81/view']
      },
      {
        number: 2,
        title: 'Requirement Elicitation, Analysis, and Specification',
        topics: [
          'Functional and Non-functional requirements',
          'Requirement Sources and Elicitation Techniques',
          'Analysis Modeling for Function-oriented and Object-oriented software development',
          'Use case Modeling',
          'System and Software Requirement Specifications',
          'Requirement Validation',
          'Traceability'
        ],
        driveLinks: ['https://drive.google.com/file/d/example82/view']
      },
      {
        number: 3,
        title: 'Software Design',
        topics: [
          'The Software Design Process',
          'Design Concepts and Principles',
          'Software Modeling and UML',
          'Architectural Design',
          'Architectural Views and Styles',
          'User Interface Design',
          'Function-oriented Design',
          'SA/SD Component Based Design',
          'Design Metrics'
        ],
        driveLinks: ['https://drive.google.com/file/d/example83/view']
      },
      {
        number: 4,
        title: 'Software Analysis and Testing',
        topics: [
          'Software Static and Dynamic analysis',
          'Code inspections',
          'Software Testing Fundamentals',
          'Software Test Process',
          'Testing Levels',
          'Test Criteria',
          'Test Case Design',
          'Test Oracles',
          'Test Techniques',
          'Black-Box Testing',
          'White-Box Unit Testing',
          'Testing Frameworks',
          'Integration Testing',
          'System Testing',
          'Test Plan',
          'Test Metrics',
          'Testing Tools',
          'Object-oriented analysis and design'
        ],
        driveLinks: ['https://drive.google.com/file/d/example84/view']
      },
      {
        number: 5,
        title: 'Software Maintenance & Software Project Measurement',
        topics: [
          'Need and Types of Maintenance',
          'Software Configuration Management (SCM)',
          'Software Change Management',
          'Version Control',
          'Change control and Reporting',
          'Program Comprehension Techniques',
          'Re-engineering',
          'Reverse Engineering',
          'Tool Support',
          'Project Management Concepts',
          'Feasibility Analysis',
          'Project and Process Planning',
          'Resources Allocations',
          'Software efforts',
          'Schedule and Cost estimations',
          'Project Scheduling and Tracking',
          'Risk Assessment and Mitigation',
          'Software Quality Assurance (SQA)',
          'Project Plan',
          'Project Metrics'
        ],
        driveLinks: ['https://drive.google.com/file/d/example85/view']
      }
    ]
  },
  {
    id: 'architecture',
    name: 'Computer Organization & Architecture',
    code: 'CS-404',
    description: 'Study of computer organization and architectural concepts',
    semester: 4,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Basic Structure of Computer',
        topics: [
          'Structure of Desktop Computers',
          'CPU: General Register Organization',
          'Memory Register, Instruction Register',
          'Control Word, Stack Organization',
          'Instruction Format, ALU, I/O System',
          'Bus, CPU and Memory Program Counter',
          'Bus Structure, Register Transfer Language',
          'Bus and Memory Transfer',
          'Addressing modes',
          'Control Unit Organization',
          'Basic Concept of Instruction',
          'Instruction Types',
          'Micro Instruction Formats',
          'Fetch and Execution cycle',
          'Hardwired control unit',
          'Microprogrammed Control unit',
          'Microprogram sequencer',
          'Control Memory',
          'Sequencing and Execution of Micro Instruction'
        ],
        driveLinks: ['https://drive.google.com/file/d/example86/view']
      },
      {
        number: 2,
        title: 'Computer Arithmetic',
        topics: [
          'Addition and Subtraction',
          'Tools Compliment Representation',
          'Signed Addition and Subtraction',
          'Multiplication and division',
          'Booths Algorithm',
          'Division Operation',
          'Floating Point Arithmetic Operation',
          'Design of Arithmetic unit'
        ],
        driveLinks: ['https://drive.google.com/file/d/example87/view']
      },
      {
        number: 3,
        title: 'I/O Organization',
        topics: [
          'I/O Interface – PCI Bus, SCSI Bus, USB',
          'Data Transfer: Serial, Parallel',
          'Synchronous, Asynchronous Modes of Data Transfer',
          'Direct Memory Access (DMA)',
          'I/O Processor'
        ],
        driveLinks: ['https://drive.google.com/file/d/example88/view']
      },
      {
        number: 4,
        title: 'Memory Organization',
        topics: [
          'Main memory - RAM, ROM',
          'Secondary Memory – Magnetic Tape, Disk, Optical Storage',
          'Cache Memory: Cache Structure and Design',
          'Mapping Scheme',
          'Replacement Algorithm',
          'Improving Cache Performance',
          'Virtual Memory',
          'Memory management hardware'
        ],
        driveLinks: ['https://drive.google.com/file/d/example89/view']
      },
      {
        number: 5,
        title: 'Multiprocessors',
        topics: [
          'Characteristics of Multiprocessor',
          'Structure of Multiprocessor',
          'Interprocessor Arbitration',
          'Inter-Processor Communication and Synchronization',
          'Memory in Multiprocessor System',
          'Concept of Pipelining',
          'Vector Processing',
          'Array Processing',
          'RISC And CISC',
          'Study of Multicore Processor – Intel, AMD'
        ],
        driveLinks: ['https://drive.google.com/file/d/example90/view']
      }
    ]
  },
  {
    id: 'os',
    name: 'Operating Systems',
    code: 'CS-405',
    description: 'Study of operating system concepts and implementation',
    semester: 4,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Operating Systems',
        topics: [
          'Function, Evolution, Different Types',
          'Desirable Characteristics and features of an O/S',
          'Operating Systems Services: Types of Services',
          'Different ways of providing these Services',
          'Utility Programs',
          'System Calls'
        ],
        driveLinks: ['https://drive.google.com/file/d/example91/view']
      },
      {
        number: 2,
        title: 'File Systems',
        topics: [
          'File Concept',
          'User\'s and System Programmer\'s view of File System',
          'Disk Organization',
          'Tape Organization',
          'Different Modules of a File System',
          'Disk Space Allocation Methods – Contiguous, Linked, Indexed',
          'Directory Structures',
          'File Protection',
          'System Calls for File Management',
          'Disk Scheduling Algorithms'
        ],
        driveLinks: ['https://drive.google.com/file/d/example92/view']
      },
      {
        number: 3,
        title: 'CPU Scheduling and Memory Management',
        topics: [
          'Process Concept',
          'Scheduling Concepts',
          'Types of Schedulers',
          'Process State Diagram',
          'Scheduling Algorithms',
          'Algorithms Evaluation',
          'System calls for Process Management',
          'Multiple Processor Scheduling',
          'Concept of Threads',
          'Memory Management Techniques',
          'Partitioning, Swapping, Segmentation, Paging',
          'Paged Segmentation',
          'Overlay, Dynamic Linking and Loading',
          'Virtual Memory – Concept, Implementation by Demand Paging'
        ],
        driveLinks: ['https://drive.google.com/file/d/example93/view']
      },
      {
        number: 4,
        title: 'Input/Output and Concurrent Processes',
        topics: [
          'I/O Principles and Programming',
          'Input/Output Problems',
          'Asynchronous Operations',
          'Speed gap Format conversion',
          'I/O Interfaces',
          'Programme Controlled I/O',
          'Interrupt Driven I/O',
          'Concurrent I/O',
          'Real and Virtual Concurrency',
          'Mutual Exclusion',
          'Synchronization',
          'Inter-Process Communication',
          'Critical Section Problem',
          'Solution to Critical Section Problem',
          'Semaphores – Binary and Counting',
          'WAIT & SIGNAL Operations',
          'Deadlocks: Problems, Characterization',
          'Prevention, Avoidance, Recovery'
        ],
        driveLinks: ['https://drive.google.com/file/d/example94/view']
      },
      {
        number: 5,
        title: 'Advanced Operating Systems',
        topics: [
          'Introduction to Network Operating Systems',
          'Introduction to Distributed Operating Systems',
          'Introduction to Multiprocessor Operating Systems',
          'Case Studies: Unix/Linux',
          'Case Studies: WINDOWS',
          'Case Studies: Contemporary Operating Systems'
        ],
        driveLinks: ['https://drive.google.com/file/d/example95/view']
      }
    ]
  },
  {
    id: 'toc',
    name: 'Theory of Computation',
    code: 'CS-501',
    description: 'Study of theoretical computer science and automata theory',
    semester: 5,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction of Automata Theory',
        topics: [
          'Examples of automata machines',
          'Finite Automata as a language acceptor and translator',
          'Moore machines and mealy machines',
          'Composite machine',
          'Conversion from Mealy to Moore and vice versa'
        ],
        driveLinks: ['https://drive.google.com/file/d/example96/view']
      },
      {
        number: 2,
        title: 'Types of Finite Automata',
        topics: [
          'Non Deterministic Finite Automata (NDFA)',
          'Deterministic finite automata machines',
          'Conversion of NDFA to DFA',
          'Minimization of automata machines',
          'Regular expression',
          'Arden\'s theorem',
          'Meaning of union, intersection, concatenation and closure',
          '2 way DFA'
        ],
        driveLinks: ['https://drive.google.com/file/d/example97/view']
      },
      {
        number: 3,
        title: 'Grammars',
        topics: [
          'Types of grammar',
          'Context sensitive grammar',
          'Context free grammar',
          'Regular grammar',
          'Derivation trees',
          'Ambiguity in grammar',
          'Simplification of context free grammar',
          'Conversion of grammar to automata machine and vice versa',
          'Chomsky hierarchy of grammar',
          'Killing null and unit productions',
          'Chomsky normal form and Greibach normal form'
        ],
        driveLinks: ['https://drive.google.com/file/d/example98/view']
      },
      {
        number: 4,
        title: 'Push down Automata',
        topics: [
          'Example of PDA',
          'Deterministic and non-deterministic PDA',
          'Conversion of PDA into context free grammar and vice versa',
          'CFG equivalent to PDA',
          'Petrinet model'
        ],
        driveLinks: ['https://drive.google.com/file/d/example99/view']
      },
      {
        number: 5,
        title: 'Turing Machine',
        topics: [
          'Techniques for construction',
          'Universal Turing machine',
          'Multitape, multihead and multidimensional Turing machine',
          'N-P complete problems',
          'Decidability and Recursively Enumerable Languages',
          'Decidability, decidable languages',
          'Undecidable languages',
          'Halting problem of Turing machine',
          'The post correspondence problem'
        ],
        driveLinks: ['https://drive.google.com/file/d/example100/view']
      }
    ]
  },
  {
    id: 'dbms',
    name: 'Database Management Systems',
    code: 'CS-502',
    description: 'Study of database systems, design, and implementation',
    semester: 5,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'DBMS Concepts and Architecture',
        topics: [
          'Introduction',
          'Database approach v/s Traditional file accessing approach',
          'Advantages of database systems',
          'Data models, Schemas and instances',
          'Data independence',
          'Data Base Language and interfaces',
          'Overall Database Structure',
          'Functions of DBA and designer',
          'ER data model: Entitles and attributes',
          'Entity types',
          'Defining the E-R diagram',
          'Concept of Generalization, Aggregation and Specialization',
          'Transforming ER diagram into tables',
          'Various data models: object oriented, network, and relational',
          'Comparison between the three types of models'
        ],
        driveLinks: ['https://drive.google.com/file/d/example101/view']
      },
      {
        number: 2,
        title: 'Relational Data Models',
        topics: [
          'Domains, Tuples, Attributes, Relations',
          'Characteristics of relations',
          'Keys, Key attributes of relation',
          'Relational database, Schemas',
          'Integrity constraints',
          'Referential integrity',
          'Intension and Extension',
          'SQL-DDL, DML, integrity constraints',
          'Complex queries, various joins, indexing, triggers, assertions',
          'Relational algebra and relational calculus',
          'Relational algebra operations',
          'Types of relational calculus'
        ],
        driveLinks: ['https://drive.google.com/file/d/example102/view']
      },
      {
        number: 3,
        title: 'Database Design',
        topics: [
          'Introduction to normalization',
          'Normal forms',
          'Functional dependency',
          'Decomposition',
          'Dependency preservation and lossless join',
          'Problems with null valued and dangling tuples',
          'Multivalued dependencies',
          'Query Optimization',
          'Steps of optimization',
          'Various algorithms for select, project and join operations',
          'Optimization methods: heuristic based, cost estimation based'
        ],
        driveLinks: ['https://drive.google.com/file/d/example103/view']
      },
      {
        number: 4,
        title: 'Transaction Processing Concepts',
        topics: [
          'Transaction System',
          'Testing of Serializability',
          'Serializability of schedules',
          'Conflict & view serializable schedule',
          'Recoverability',
          'Recovery from transaction failures',
          'Log based recovery',
          'Checkpoints deadlock handling',
          'Concurrency Control Techniques',
          'Locking Techniques',
          'Time stamping protocols',
          'Validation based protocol',
          'Multiple granularity',
          'Multi version schemes',
          'Recovery with concurrent transaction',
          'Introduction to Distributed databases',
          'Data mining, data warehousing',
          'Object Technology and DBMS',
          'Comparative study of OODBMS Vs DBMS',
          'Temporal, Deductive, Multimedia, Web & Mobile database'
        ],
        driveLinks: ['https://drive.google.com/file/d/example104/view']
      },
      {
        number: 5,
        title: 'Study of RDBMS through Oracle/PL SQL/MySQL',
        topics: [
          'Architecture, physical files, memory structures, background process',
          'Concept of table spaces, segments, extents and block',
          'Dedicated server, multi threaded server',
          'Distributed database, database links, and snapshot',
          'Data dictionary, dynamic performance view',
          'Security, role management, privilege management',
          'Profiles, invoker defined security model',
          'SQL queries and data extraction',
          'Special operators and hierarchical queries',
          'ANSI SQL and anonymous blocks',
          'Cursor management',
          'Stored procedures',
          'User defined functions',
          'Triggers and mutating errors'
        ],
        driveLinks: ['https://drive.google.com/file/d/example105/view']
      }
    ]
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    code: 'CS-503A',
    description: 'Study of data analytics and big data technologies',
    semester: 5,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Descriptive Statistics',
        topics: [
          'Probability Distributions',
          'Inferential Statistics',
          'Inferential Statistics through hypothesis tests',
          'Regression & ANOVA',
          'Regression ANOVA (Analysis of Variance)'
        ],
        driveLinks: ['https://drive.google.com/file/d/example106/view']
      },
      {
        number: 2,
        title: 'Introduction to Big Data',
        topics: [
          'Big Data and its Importance',
          'Four V\'s of Big Data',
          'Drivers for Big Data',
          'Introduction to Big Data Analytics',
          'Big Data Analytics applications',
          'Hadoop\'s Parallel World',
          'Data discovery',
          'Open source technology for Big Data Analytics',
          'Cloud and Big Data',
          'Predictive Analytics',
          'Mobile Business Intelligence and Big Data',
          'Crowd Sourcing Analytics',
          'Inter- and Trans-Firewall Analytics',
          'Information Management'
        ],
        driveLinks: ['https://drive.google.com/file/d/example107/view']
      },
      {
        number: 3,
        title: 'Processing Big Data',
        topics: [
          'Integrating disparate data stores',
          'Mapping data to the programming framework',
          'Connecting and extracting data from storage',
          'Transforming data for processing',
          'Subdividing data in preparation for Hadoop Map Reduce'
        ],
        driveLinks: ['https://drive.google.com/file/d/example108/view']
      },
      {
        number: 4,
        title: 'Hadoop MapReduce',
        topics: [
          'Employing Hadoop Map Reduce',
          'Creating components of Hadoop Map Reduce jobs',
          'Distributing data processing across server farms',
          'Executing Hadoop Map Reduce jobs',
          'Monitoring progress of job flows',
          'Building Blocks of Hadoop Map Reduce',
          'Distinguishing Hadoop daemons',
          'Investigating the Hadoop Distributed File System',
          'Selecting appropriate execution modes'
        ],
        driveLinks: ['https://drive.google.com/file/d/example109/view']
      },
      {
        number: 5,
        title: 'Big Data Tools and Techniques',
        topics: [
          'Installing and Running Pig',
          'Comparison with Databases',
          'Pig Latin',
          'User-Define Functions',
          'Data Processing Operators',
          'Installing and Running Hive',
          'Hive QL',
          'Querying Data',
          'User-Defined Functions',
          'Oracle Big Data'
        ],
        driveLinks: ['https://drive.google.com/file/d/example110/view']
      }
    ]
  },
  {
    id: 'pattern',
    name: 'Pattern Recognition',
    code: 'CS-503B',
    description: 'Study of pattern recognition techniques and applications',
    semester: 5,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction',
        topics: [
          'Definitions',
          'Data sets for Pattern',
          'Application Areas and Examples',
          'Design principles of pattern recognition system',
          'Classification and clustering',
          'Supervised Learning',
          'Unsupervised learning and adaptation',
          'Pattern recognition approaches',
          'Decision Boundaries',
          'Decision region',
          'Metric spaces, distances'
        ],
        driveLinks: ['https://drive.google.com/file/d/example111/view']
      },
      {
        number: 2,
        title: 'Classification',
        topics: [
          'Introduction and applications',
          'Types of classification',
          'Decision tree',
          'Naïve bayes',
          'Logistic regression',
          'Support vector machine',
          'Random forest',
          'K Nearest Neighbour Classifier and variants',
          'Efficient algorithms for nearest neighbour classification',
          'Different Approaches to Prototype Selection',
          'Combination of Classifiers',
          'Training set, test set',
          'Standardization and normalization'
        ],
        driveLinks: ['https://drive.google.com/file/d/example112/view']
      },
      {
        number: 3,
        title: 'Pattern Recognition Paradigms',
        topics: [
          'Different Paradigms of Pattern Recognition',
          'Representations of Patterns and Classes',
          'Unsupervised Learning & Clustering',
          'Criterion functions for clustering',
          'Clustering Techniques',
          'Iterative square-error partitional clustering – K means',
          'Hierarchical clustering',
          'Cluster validation'
        ],
        driveLinks: ['https://drive.google.com/file/d/example113/view']
      },
      {
        number: 4,
        title: 'Feature Extraction and Selection',
        topics: [
          'Introduction of feature extraction and feature selection',
          'Types of feature extraction',
          'Problem statement and Uses',
          'Branch and bound algorithm',
          'Sequential forward/backward selection algorithms',
          '(l,r) algorithm'
        ],
        driveLinks: ['https://drive.google.com/file/d/example114/view']
      },
      {
        number: 5,
        title: 'Recent Advances',
        topics: [
          'Recent advances in Pattern Recognition',
          'Structural PR',
          'SVMs',
          'FCM',
          'Soft computing and Neuro-fuzzy techniques',
          'Real-life examples',
          'Histograms rules',
          'Density Estimation',
          'Nearest Neighbor Rule',
          'Fuzzy classification'
        ],
        driveLinks: ['https://drive.google.com/file/d/example115/view']
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cyber Security',
    code: 'CS-503C',
    description: 'Study of cyber security concepts and practices',
    semester: 5,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Cyber Crime',
        topics: [
          'Introduction of Cyber Crime',
          'Challenges of cyber crime',
          'Classifications of Cybercrimes',
          'E-Mail Spoofing',
          'Spamming',
          'Internet Time Theft',
          'Salami attack/Salami Technique'
        ],
        driveLinks: ['https://drive.google.com/file/d/example116/view']
      },
      {
        number: 2,
        title: 'Web Crimes',
        topics: [
          'Web jacking',
          'Online Frauds',
          'Software Piracy',
          'Computer Network Intrusions',
          'Password Sniffing',
          'Identity Theft',
          'Cyber terrorism',
          'Virtual Crime',
          'Perception of cyber criminals',
          'Hackers, insurgents and extremist groups',
          'Web servers hacking',
          'Session hijacking'
        ],
        driveLinks: ['https://drive.google.com/file/d/example117/view']
      },
      {
        number: 3,
        title: 'Cyber Crime and Criminal Justice',
        topics: [
          'Concept of Cyber Crime and the IT Act, 2000',
          'Hacking',
          'Teenage Web Vandals',
          'Cyber Fraud and Cheating',
          'Defamation',
          'Harassment and E-mail Abuse',
          'Other IT Act Offences',
          'Monetary Penalties',
          'Jurisdiction and Cyber Crimes',
          'Nature of Criminality',
          'Strategies to tackle Cyber Crime and Trends'
        ],
        driveLinks: ['https://drive.google.com/file/d/example118/view']
      },
      {
        number: 4,
        title: 'Legal Framework',
        topics: [
          'Indian Evidence Act of 1872 v. Information Technology Act, 2000',
          'Status of Electronic Records as Evidence',
          'Proof and Management of Electronic Records',
          'Relevancy, Admissibility and Probative Value of E-Evidence',
          'Proving Digital Signatures',
          'Proof of Electronic Agreements',
          'Proving Electronic Messages'
        ],
        driveLinks: ['https://drive.google.com/file/d/example119/view']
      },
      {
        number: 5,
        title: 'Tools and Methods in Cybercrime',
        topics: [
          'Proxy Servers and Anonymizers',
          'Password Cracking',
          'Key loggers and Spyware',
          'Virus and worms',
          'Trojan Horses',
          'Backdoors',
          'DoS and DDoS Attacks',
          'Buffer and Overflow',
          'Attack on Wireless Networks',
          'Phishing: Method of Phishing',
          'Phishing Techniques'
        ],
        driveLinks: ['https://drive.google.com/file/d/example120/view']
      }
    ]
  },
  {
    id: 'web',
    name: 'Internet and Web Technology',
    code: 'CS-504A',
    description: 'Study of internet technologies and web development',
    semester: 5,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction and Web Design',
        topics: [
          'Concept of WWW',
          'Internet and WWW',
          'HTTP Protocol: Request and Response',
          'Web browser and Web servers',
          'Features of Web 2.0',
          'Concepts of effective web design',
          'Web design issues including Browser',
          'Bandwidth and Cache',
          'Display resolution',
          'Look and Feel of the Website',
          'Page Layout and linking',
          'User centric design',
          'Sitemap',
          'Planning and publishing website',
          'Designing effective navigation'
        ],
        driveLinks: ['https://drive.google.com/file/d/example121/view']
      },
      {
        number: 2,
        title: 'HTML',
        topics: [
          'Basics of HTML',
          'Formatting and fonts',
          'Commenting code',
          'Color',
          'Hyperlink',
          'Lists',
          'Tables',
          'Images',
          'Forms',
          'XHTML',
          'Meta tags',
          'Character entities',
          'Frames and frame sets',
          'Browser architecture and Web site structure',
          'Overview and features of HTML5'
        ],
        driveLinks: ['https://drive.google.com/file/d/example122/view']
      },
      {
        number: 3,
        title: 'CSS and JavaScript',
        topics: [
          'Need for CSS',
          'Introduction to CSS',
          'Basic syntax and structure',
          'Using CSS',
          'Background images, colors and properties',
          'Manipulating texts',
          'Using fonts, borders and boxes',
          'Margins, padding lists',
          'Positioning using CSS',
          'CSS2',
          'Overview and features of CSS3',
          'Client side scripting with JavaScript',
          'Variables, functions, conditions, loops',
          'Pop up boxes',
          'JavaScript and objects',
          'The DOM and web browser environments',
          'Forms and validations',
          'DHTML'
        ],
        driveLinks: ['https://drive.google.com/file/d/example123/view']
      },
      {
        number: 4,
        title: 'XML and PHP',
        topics: [
          'Introduction to XML',
          'Uses of XML',
          'Simple XML',
          'XML key components',
          'DTD and Schemas',
          'Using XML with application',
          'Transforming XML using XSL and XSLT',
          'Introduction to PHP',
          'Basic syntax of PHP',
          'Decision and looping',
          'Arrays',
          'Functions',
          'Browser control and detection',
          'Form processing',
          'Files',
          'Cookies and Sessions',
          'Object Oriented Programming with PHP'
        ],
        driveLinks: ['https://drive.google.com/file/d/example124/view']
      },
      {
        number: 5,
        title: 'PHP and MySQL',
        topics: [
          'Basic commands with PHP examples',
          'Connection to server',
          'Creating database',
          'Selecting a database',
          'Listing database',
          'Listing table names',
          'Creating a table',
          'Inserting data',
          'Altering tables',
          'Queries',
          'Deleting database',
          'Deleting data and tables',
          'PHP myadmin and database bugs'
        ],
        driveLinks: ['https://drive.google.com/file/d/example125/view']
      }
    ]
  },
  {
    id: 'oops',
    name: 'Object Oriented Programming',
    code: 'CS-504B',
    description: 'Study of object-oriented programming concepts and implementation',
    semester: 5,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Basics of Programming',
        topics: [
          'Character set',
          'Constants',
          'Variables',
          'Keywords',
          'Identifiers literals',
          'Type Declaration Instruction',
          'Arithmetic Integer Long Short',
          'Signed unsigned',
          'Storage classes',
          'Integer and Float Conversions',
          'Type conversion in assignment',
          'Hierarchy of operations'
        ],
        driveLinks: ['https://drive.google.com/file/d/example126/view']
      },
      {
        number: 2,
        title: 'Control Structures',
        topics: [
          'Decision control structure',
          'Control instructions',
          'If, if-else',
          'Use of logical operator',
          'Hierarchy of logical operators',
          'Arithmetic operators',
          'Relational operators',
          'Assignment operators',
          'Increment and decrement operators',
          'Conditional operators',
          'Bit wise operators',
          'Special operators',
          'Loops control structure',
          'While loop',
          'For loop',
          'Do-while loop',
          'Odd loop',
          'Nested loop',
          'Break, continue',
          'Case control structure',
          'Go to, exit statement'
        ],
        driveLinks: ['https://drive.google.com/file/d/example127/view']
      },
      {
        number: 3,
        title: 'Arrays and Strings',
        topics: [
          'What are arrays',
          'Array initialization',
          'Bound checking 1D array',
          '2D array initialization',
          'Memory map of 1D and 2D array',
          'Multidimensional array',
          'What are strings',
          'Standard library string functions',
          'strlen(), strcpy(), strcat(), strcmp()',
          '2D array of characters'
        ],
        driveLinks: ['https://drive.google.com/file/d/example128/view']
      },
      {
        number: 4,
        title: 'Structures and Preprocessor',
        topics: [
          'Why use structure',
          'Declaration of structure',
          'Accessing structure elements',
          'How structure elements are stored',
          'Array of structure',
          'Uses of structure',
          'Features of Preprocessor',
          'Macro expansion',
          'Micro with arguments',
          'File inclusion',
          'Conditional directives',
          '#if, #elif',
          'Miscellaneous directives',
          '#include, #define',
          '#undef, #pragma',
          'Union definition & declaration',
          'Accessing union members',
          'Union of structures',
          'Initialization of union member',
          'Uses of union'
        ],
        driveLinks: ['https://drive.google.com/file/d/example129/view']
      },
      {
        number: 5,
        title: 'Introduction to OOP',
        topics: [
          'Basic concepts of OOP',
          'Object, class',
          'Data abstraction',
          'Data encapsulation',
          'Inheritance',
          'Polymorphism',
          'Static and dynamic binding',
          'Message passing',
          'Benefits of OOP\'s',
          'Disadvantage of OOP\'s',
          'Application of OOP\'s',
          'A simple program',
          'Anatomy of program',
          'Creating a source file',
          'Compiling and Linking'
        ],
        driveLinks: ['https://drive.google.com/file/d/example130/view']
      }
    ]
  },
  {
    id: 'introdbms',
    name: 'Introduction to Database Management Systems',
    code: 'CS-504C',
    description: 'Introduction to database concepts and management systems',
    semester: 5,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Database Management System Concepts',
        topics: [
          'Introduction',
          'Significance of Database',
          'Database System Applications',
          'Data Independence',
          'Data Modeling for a Database',
          'Entities and their Attributes',
          'Relationships and Relationships Types',
          'Advantages and Disadvantages of DBMS',
          'DBMS Vs RDBMS'
        ],
        driveLinks: ['https://drive.google.com/file/d/example131/view']
      },
      {
        number: 2,
        title: 'Database Models and Implementation',
        topics: [
          'Data Model and Types of Data Model',
          'Relational Data Model',
          'Hierarchical Model',
          'Network Data Model',
          'Object/Relational Model',
          'Object-Oriented Model',
          'Entity-Relationship Model',
          'Modeling using E-R Diagrams',
          'Notation used in E-R Model',
          'Relationships and Relationship Types',
          'Associative Database Model'
        ],
        driveLinks: ['https://drive.google.com/file/d/example132/view']
      },
      {
        number: 3,
        title: 'SQL DDL',
        topics: [
          'Categories of SQL Commands',
          'Data Definition Language',
          'Create table',
          'Drop table',
          'Alter Table',
          'Primary Key',
          'Foreign Key',
          'Truncate Table',
          'Index',
          'Cursor'
        ],
        driveLinks: ['https://drive.google.com/file/d/example133/view']
      },
      {
        number: 4,
        title: 'SQL DML',
        topics: [
          'Data Manipulation Language',
          'Insert Statement',
          'Multiple Inserts',
          'Delete Statement',
          'Delete with conditions',
          'Update statement',
          'Update with Conditions',
          'Merge Statement'
        ],
        driveLinks: ['https://drive.google.com/file/d/example134/view']
      },
      {
        number: 5,
        title: 'SELECT and Advanced SQL',
        topics: [
          'SELECT statements',
          'SQL queries',
          'Data extraction from single and multiple tables',
          'Equi-join, non equi-join, self-join, outer join',
          'Usage of like, any, all, exists, in Special operators',
          'Hierarchical queries',
          'Inline queries',
          'Flashback queries',
          'Introduction of ANSI SQL',
          'Anonymous block',
          'Nested anonymous block',
          'Branching and looping constructs in ANSI SQL'
        ],
        driveLinks: ['https://drive.google.com/file/d/example135/view']
      }
    ]
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    code: 'CS-601',
    description: 'Study of machine learning concepts and applications',
    semester: 6,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Machine Learning',
        topics: [
          'Introduction to machine learning, scope and limitations',
          'Regression, probability, statistics and linear algebra for machine learning',
          'Convex optimization',
          'Data visualization',
          'Hypothesis function and testing',
          'Data distributions',
          'Data preprocessing',
          'Data augmentation',
          'Normalizing data sets',
          'Machine learning models',
          'Supervised and unsupervised learning'
        ],
        driveLinks: ['https://drive.google.com/file/d/example136/view']
      },
      {
        number: 2,
        title: 'Neural Networks Fundamentals',
        topics: [
          'Linearity vs non linearity',
          'Activation functions like sigmoid, ReLU, etc.',
          'Weights and bias',
          'Loss function',
          'Gradient descent',
          'Multilayer network',
          'Backpropagation',
          'Weight initialization',
          'Training, testing',
          'Unstable gradient problem',
          'Auto encoders',
          'Batch normalization',
          'Dropout',
          'L1 and L2 regularization',
          'Momentum',
          'Tuning hyper parameters'
        ],
        driveLinks: ['https://drive.google.com/file/d/example137/view']
      },
      {
        number: 3,
        title: 'Convolutional Neural Networks',
        topics: [
          'Convolutional neural network',
          'Flattening',
          'Subsampling',
          'Padding',
          'Stride',
          'Convolution layer',
          'Pooling layer',
          'Loss layer',
          'Dance layer 1x1 convolution',
          'Inception network',
          'Input channels',
          'Transfer learning',
          'One shot learning',
          'Dimension reductions',
          'Implementation of CNN like tensor flow, keras etc.'
        ],
        driveLinks: ['https://drive.google.com/file/d/example138/view']
      },
      {
        number: 4,
        title: 'Advanced Neural Networks',
        topics: [
          'Recurrent neural network',
          'Long short-term memory',
          'Gated recurrent unit',
          'Translation',
          'Beam search and width',
          'Bleu score',
          'Attention model',
          'Reinforcement Learning',
          'RL-framework',
          'MDP',
          'Bellman equations',
          'Value Iteration and Policy Iteration',
          'Actor-critic model',
          'Q-learning',
          'SARSA'
        ],
        driveLinks: ['https://drive.google.com/file/d/example139/view']
      },
      {
        number: 5,
        title: 'Applications and Case Studies',
        topics: [
          'Support Vector Machines',
          'Bayesian learning',
          'Application of machine learning in computer vision',
          'Speech processing',
          'Natural language processing',
          'Case Study: ImageNet Competition'
        ],
        driveLinks: ['https://drive.google.com/file/d/example140/view']
      }
    ]
  },
  {
    id: 'networks',
    name: 'Computer Networks',
    code: 'CS-602',
    description: 'Study of computer networking concepts and protocols',
    semester: 6,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Computer Network Fundamentals',
        topics: [
          'Computer Network: Definitions, goals, components, Architecture, Classifications & Types',
          'Layered Architecture: Protocol hierarchy, Design Issues, Interfaces and Services',
          'Connection Oriented & Connectionless Services',
          'Service primitives',
          'ISO-OSI Reference Model: Principle, Model, Descriptions of layers',
          'Comparison with TCP/IP',
          'Principals of physical layer: Media, Bandwidth, Data rate and Modulations'
        ],
        driveLinks: ['https://drive.google.com/file/d/example141/view']
      },
      {
        number: 2,
        title: 'Data Link Layer',
        topics: [
          'Need, Services Provided, Framing, Flow Control, Error control',
          'Data Link Layer Protocol',
          'Elementary & Sliding Window protocol',
          '1-bit, Go-Back-N, Selective Repeat, Hybrid ARQ',
          'Protocol verification: Finite State Machine Models & Petri net models',
          'ARP/RARP/GARP'
        ],
        driveLinks: ['https://drive.google.com/file/d/example142/view']
      },
      {
        number: 3,
        title: 'MAC Sub Layer',
        topics: [
          'MAC Addressing',
          'Binary Exponential Back-off (BEB) Algorithm',
          'Distributed Random Access Schemes/Contention Schemes',
          'ALOHA and Slotted-ALOHA',
          'CSMA, CSMA/CD, CSMA/CA',
          'Collision Free Protocols',
          'Basic Bit Map, BRAP, Binary Count Down, MLMA',
          'Limited Contention Protocols',
          'Adaptive Tree Walk',
          'Performance Measuring Metrics',
          'IEEE Standards 802 series & their variant'
        ],
        driveLinks: ['https://drive.google.com/file/d/example143/view']
      },
      {
        number: 4,
        title: 'Network Layer',
        topics: [
          'Need, Services Provided, Design issues',
          'Routing algorithms: Least Cost Routing algorithm',
          'Dijkstra\'s algorithm',
          'Bellman-ford algorithm',
          'Hierarchical Routing',
          'Broadcast Routing',
          'Multicast Routing',
          'IP Addresses',
          'Header format',
          'Packet forwarding',
          'Fragmentation and reassembly',
          'ICMP',
          'Comparative study of IPv4 & IPv6'
        ],
        driveLinks: ['https://drive.google.com/file/d/example144/view']
      },
      {
        number: 5,
        title: 'Transport and Application Layer',
        topics: [
          'Transport Layer Design Issues',
          'UDP: Header Format, Per-Segment Checksum',
          'Carrying Unicast/Multicast Real-Time Traffic',
          'TCP: Connection Management',
          'Reliability of Data Transfers',
          'TCP Flow Control',
          'TCP Congestion Control',
          'TCP Header Format',
          'TCP Timer Management',
          'Application Layer: WWW and HTTP',
          'FTP, SSH, Email (SMTP, MIME, IMAP)',
          'DNS',
          'Network Management (SNMP)'
        ],
        driveLinks: ['https://drive.google.com/file/d/example145/view']
      }
    ]
  },
  {
    id: 'aca',
    name: 'Advanced Computer Architecture',
    code: 'CS-603A',
    description: 'Study of advanced computer architecture concepts',
    semester: 6,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Parallel Computer Architecture',
        topics: [
          'Flynn\'s Classification',
          'System Attributes to Performance',
          'Parallel computer models - Multiprocessors and multicomputers',
          'Multivector and SIMD Computers',
          'Data and resource dependences',
          'Hardware and software parallelism',
          'Program partitioning and scheduling',
          'Grain size and latency',
          'Control flow, data flow and Demand driven mechanisms',
          'Static interconnection networks',
          'Dynamic interconnection Networks',
          'Bus Systems, Crossbar Switch',
          'Multiport Memory',
          'Multistage and Combining Networks'
        ],
        driveLinks: ['https://drive.google.com/file/d/example146/view']
      },
      {
        number: 2,
        title: 'Instruction Set Architecture',
        topics: [
          'CISC Scalar Processors',
          'RISC Scalar Processors',
          'VLIW architecture',
          'Memory Hierarchy',
          'Inclusion, Coherence and Locality',
          'Memory capacity planning',
          'Interleaved memory organization',
          'Memory interleaving',
          'Pipelined memory access',
          'Bandwidth and Fault Tolerance',
          'Backplane Bus System',
          'Backplane bus specification',
          'Addressing and timing protocols',
          'Arbitration transaction and interrupt'
        ],
        driveLinks: ['https://drive.google.com/file/d/example147/view']
      },
      {
        number: 3,
        title: 'Pipeline Processing',
        topics: [
          'Linear pipeline processor',
          'Nonlinear pipeline processor',
          'Instruction pipeline design',
          'Mechanisms for instruction pipelining',
          'Pipeline hazards',
          'Dynamic instruction scheduling',
          'Score boarding and Tomosulo\'s algorithm',
          'Branch handling techniques',
          'Arithmetic Pipeline Design',
          'Static arithmetic pipeline',
          'Multifunctional arithmetic pipelines',
          'Superscalar pipeline design',
          'Super pipeline processor design'
        ],
        driveLinks: ['https://drive.google.com/file/d/example148/view']
      },
      {
        number: 4,
        title: 'Cache and Vector Processing',
        topics: [
          'Cache coherence',
          'Snoopy protocols',
          'Directory based protocols',
          'Message routing schemes in multicomputer network',
          'Deadlock and virtual channel',
          'Vector Processing Principles',
          'Vector instruction types',
          'Vector-access memory schemes',
          'Vector supercomputer architecture',
          'SIMD organization',
          'Distributed memory model and shared memory model',
          'Principles of Multithreading',
          'Multithreading Issues and Solutions',
          'Multiple-Context Processors'
        ],
        driveLinks: ['https://drive.google.com/file/d/example149/view']
      },
      {
        number: 5,
        title: 'Parallel Programming',
        topics: [
          'Parallel Programming Models',
          'Shared-Variable Model',
          'Message-Passing Model',
          'Data-Parallel Model',
          'Object-Oriented Model',
          'Functional and Logic Models',
          'Parallel Languages and Compilers',
          'Language Features for Parallelism',
          'Parallel Programming Environment',
          'Software Tools and Environments'
        ],
        driveLinks: ['https://drive.google.com/file/d/example150/view']
      }
    ]
  },
  {
    id: 'graphics',
    name: 'Computer Graphics & Visualization',
    code: 'CS-603B',
    description: 'Study of computer graphics and visualization techniques',
    semester: 6,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Computer Graphics',
        topics: [
          'Raster Scan displays',
          'Pixels, Frame buffer',
          'Vector & Character generation',
          'Random Scan systems',
          'Display devices',
          'Scan Conversion techniques',
          'Line Drawing algorithms: simple DDA, Bresenham\'s Algorithm',
          'Circle Drawing Algorithms: Midpoint Circle drawing and Bresenham\'s Algorithm',
          'Polygon fill algorithm: Boundary-fill and Flood-fill algorithms'
        ],
        driveLinks: ['https://drive.google.com/file/d/example151/view']
      },
      {
        number: 2,
        title: '2-D Transformations',
        topics: [
          'Translation',
          'Rotation',
          'Scaling',
          'Shearing',
          'Reflection',
          'Inverse Transformation',
          'Homogeneous coordinate system',
          'Matrices Transformation',
          'Composite Transformation',
          'Windowing & Clipping',
          'World Coordinate System',
          'Screen Coordinate System',
          'Viewing Transformation',
          'Line Clipping & Polygon Clipping Algorithms'
        ],
        driveLinks: ['https://drive.google.com/file/d/example152/view']
      },
      {
        number: 3,
        title: '3-D Graphics and Illumination',
        topics: [
          '3-D Transformations: Translation, Rotation and Scaling',
          'Parallel & Perspective Projection',
          'Types of Parallel & Perspective Projection',
          'Hidden Surface elimination',
          'Depth comparison',
          'Back face detection algorithm',
          'Painter\'s Algorithm',
          'Z-Buffer Algorithm',
          'Curve generation',
          'Bezier and B-spline methods',
          'Basic Illumination Model',
          'Diffuse reflection',
          'Specular reflection',
          'Phong Shading',
          'Gouraud shading',
          'Ray Tracing',
          'Color models like RGB, YIQ, CMY, HSV'
        ],
        driveLinks: ['https://drive.google.com/file/d/example153/view']
      },
      {
        number: 4,
        title: 'Visualization',
        topics: [
          'Visualization of 2D/3D scalar fields',
          'Color mapping, ISO surfaces',
          'Direct volume data rendering',
          'Ray-casting, transfer functions, segmentation',
          'Visualization of Vector fields and flow data',
          'Time-varying data',
          'High-dimensional data',
          'Dimension reduction',
          'Parallel coordinates',
          'Non-spatial data',
          'Multi-variate, tree/graph structured, text',
          'Perceptual and cognitive foundations',
          'Evaluation of visualization methods',
          'Applications of visualization',
          'Basic Animation Techniques'
        ],
        driveLinks: ['https://drive.google.com/file/d/example154/view']
      },
      {
        number: 5,
        title: 'Multimedia',
        topics: [
          'Basic of multimedia',
          'Application of Multimedia',
          'Text-Types, Unicode Standard',
          'Text Compression',
          'Text file formats',
          'Audio Components',
          'Digital Audio',
          'Digital Audio processing',
          'Sound cards',
          'Audio file formats',
          'Audio Processing software',
          'Video-Video color spaces',
          'Digital Video',
          'Digital Video processing',
          'Video file formats',
          'Animation: Uses, Principles, Computer based animation',
          '3D Animation',
          'Animation file formats',
          'Animation software',
          'Special Effects in animation',
          'Storyboarding for Animation',
          'Compression techniques',
          'MPEG Standards',
          'Multimedia Architecture',
          'Multimedia databases'
        ],
        driveLinks: ['https://drive.google.com/file/d/example155/view']
      }
    ]
  },
  {
    id: 'compiler',
    name: 'Compiler Design',
    code: 'CS-603C',
    description: 'Study of compiler design principles and implementation',
    semester: 6,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Compiling & Lexical Analysis',
        topics: [
          'Introduction of Compiler',
          'Major data Structure in compiler',
          'Types of Compiler',
          'Front-end and Back-end of compiler',
          'Compiler structure: analysis-synthesis model of compilation',
          'Various phases of a compiler',
          'Lexical analysis: Input buffering',
          'Specification & Recognition of Tokens',
          'Design of a Lexical Analyzer Generator',
          'LEX'
        ],
        driveLinks: ['https://drive.google.com/file/d/example156/view']
      },
      {
        number: 2,
        title: 'Syntax Analysis & Syntax Directed Translation',
        topics: [
          'Syntax analysis: CFGs',
          'Top down parsing',
          'Brute force approach',
          'Recursive descent parsing',
          'Transformation on the grammars',
          'Predictive parsing',
          'Bottom up parsing',
          'Operator precedence parsing',
          'LR parsers (SLR,LALR, LR)',
          'Parser generation',
          'Syntax directed definitions',
          'Construction of Syntax trees',
          'Bottom up evaluation of S-attributed definition',
          'L-attribute definition',
          'Top down translation',
          'Bottom Up evaluation of inherited attributes',
          'Recursive Evaluation',
          'Analysis of Syntax directed definition'
        ],
        driveLinks: ['https://drive.google.com/file/d/example157/view']
      },
      {
        number: 3,
        title: 'Type Checking & Run Time Environment',
        topics: [
          'Type checking: type system',
          'Specification of simple type checker',
          'Equivalence of expression',
          'Types, type conversion',
          'Overloading of functions and operations',
          'Polymorphic functions',
          'Run time Environment: storage organization',
          'Storage allocation strategies',
          'Parameter passing',
          'Dynamic storage allocation',
          'Symbol table',
          'Error Detection & Recovery',
          'Ad-Hoc and Systematic Methods'
        ],
        driveLinks: ['https://drive.google.com/file/d/example158/view']
      },
      {
        number: 4,
        title: 'Code Generation',
        topics: [
          'Intermediate code generation',
          'Declarations',
          'Assignment statements',
          'Boolean expressions',
          'Case statements',
          'Back patching',
          'Procedure calls',
          'Issues in the design of code generator',
          'Basic block and flow graphs',
          'Register allocation and assignment',
          'DAG representation of basic blocks',
          'Peephole optimization',
          'Generating code from DAG'
        ],
        driveLinks: ['https://drive.google.com/file/d/example159/view']
      },
      {
        number: 5,
        title: 'Code Optimization',
        topics: [
          'Introduction to Code optimization',
          'Sources of optimization of basic blocks',
          'Loops in flow graphs',
          'Dead code elimination',
          'Loop optimization',
          'Introduction to global data flow analysis',
          'Code Improving transformations',
          'Data flow analysis of structure flow graph',
          'Symbolic debugging of optimized code'
        ],
        driveLinks: ['https://drive.google.com/file/d/example160/view']
      }
    ]
  },
  {
    id: 'knowledge',
    name: 'Knowledge Management',
    code: 'CS-604A',
    description: 'Study of knowledge management principles and practices',
    semester: 6,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction',
        topics: [
          'Introduction to Knowledge Management',
          'The foundations of knowledge management',
          'Cultural issues',
          'Technology applications',
          'Organizational concepts and processes',
          'Management aspects',
          'Decision support systems',
          'The Evolution of Knowledge management',
          'From Information Management to Knowledge Management',
          'Key Challenges Facing the Evolution of Knowledge Management',
          'Ethics for Knowledge Management'
        ],
        driveLinks: ['https://drive.google.com/file/d/example161/view']
      },
      {
        number: 2,
        title: 'Creating the Culture of Learning and Knowledge Sharing',
        topics: [
          'Organization and Knowledge Management',
          'Building the Learning Organization',
          'Knowledge Markets',
          'Cooperation among Distributed Technical Specialists',
          'Tacit Knowledge and Quality Assurance'
        ],
        driveLinks: ['https://drive.google.com/file/d/example162/view']
      },
      {
        number: 3,
        title: 'Knowledge Management Tools',
        topics: [
          'Telecommunications and Networks in Knowledge Management',
          'Internet Search Engines and Knowledge Management',
          'Information Technology in Support of Knowledge Management',
          'Knowledge Management and Vocabulary Control',
          'Information Mapping in Information Retrieval',
          'Information Coding in the Internet Environment',
          'Repackaging Information'
        ],
        driveLinks: ['https://drive.google.com/file/d/example163/view']
      },
      {
        number: 4,
        title: 'Knowledge Management Application',
        topics: [
          'Components of a Knowledge Strategy',
          'Case Studies',
          'From Library to Knowledge Center',
          'Knowledge Management in the Health Sciences',
          'Knowledge Management in Developing Countries'
        ],
        driveLinks: ['https://drive.google.com/file/d/example164/view']
      },
      {
        number: 5,
        title: 'Future Trends and Case Studies',
        topics: [
          'Advanced topics and case studies in knowledge management',
          'Development of a knowledge management map/plan',
          'Integration with organization\'s strategic and business plan',
          'Case study on Corporate Memories',
          'Supporting various aspects in the process life-cycles of an organization'
        ],
        driveLinks: ['https://drive.google.com/file/d/example165/view']
      }
    ]
  },
  {
    id: 'project',
    name: 'Project Management',
    code: 'CS-604B',
    description: 'Study of software project management principles and practices',
    semester: 6,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Conventional Software Management',
        topics: [
          'Evolution of software economics',
          'Improving software economics',
          'Reducing product size',
          'Software processes',
          'Team effectiveness',
          'Automation through software environments',
          'Principles of modern software management'
        ],
        driveLinks: ['https://drive.google.com/file/d/example166/view']
      },
      {
        number: 2,
        title: 'Software Management Process',
        topics: [
          'Framework',
          'Life cycle phases- inception, elaboration, construction and training phase',
          'Artifacts of the process',
          'The artifact sets',
          'Management artifacts',
          'Engineering artifacts',
          'Pragmatics artifacts',
          'Model based software architectures',
          'Workflows of the process',
          'Checkpoints of the process'
        ],
        driveLinks: ['https://drive.google.com/file/d/example167/view']
      },
      {
        number: 3,
        title: 'Software Management Disciplines',
        topics: [
          'Iterative process planning',
          'Project organisations and responsibilities',
          'Process automation',
          'Project control And process instrumentation',
          'Core metrics',
          'Management indicators',
          'Life cycle expections',
          'Process discriminants'
        ],
        driveLinks: ['https://drive.google.com/file/d/example168/view']
      }
    ]
  },
  {
    id: 'rural',
    name: 'Rural Technology & Community Development',
    code: 'CS-604C',
    description: 'Study of rural technology and community development principles',
    semester: 6,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Rural Management',
        topics: [
          'Principles and Practices Introduction to Management',
          'Theory of Management',
          'Planning, Organisation Structure and Design',
          'Motivation and Leadership',
          'Management Control and Managerial Decision Making'
        ],
        driveLinks: ['https://drive.google.com/file/d/example169/view']
      },
      {
        number: 2,
        title: 'Human Resource Management for Rural India',
        topics: [
          'Nature, Scope of Human Resource Management',
          'Human Resource Planning, Recruitment and Selection',
          'Training and Development',
          'Performance Appraisal',
          'Welfare programme and Fringe benefits',
          'Wage and Salary Administration',
          'Morale and Productivity',
          'Industrial Relations and Industrial Disputes'
        ],
        driveLinks: ['https://drive.google.com/file/d/example170/view']
      },
      {
        number: 3,
        title: 'Management of Rural Financing',
        topics: [
          'Rural Credit System',
          'Role of Rural Credit in Rural Development',
          'Evolution and Growth of Rural Credit System in India',
          'Agricultural Credit',
          'Agricultural Credit Review Committee',
          'Report of different Committees and Commissions',
          'Problems and Prospects',
          'Rural Credit to Non-farm Sector',
          'Credit for small and marginal entrepreneurs',
          'Role of Government Institutions towards facilitating Rural Credit',
          'Role of Non-Government/Semi Government/Quasi-Government Institutions',
          'Growth and Present trend of Rural Financing towards Small scale and Cottage Industries'
        ],
        driveLinks: ['https://drive.google.com/file/d/example171/view']
      },
      {
        number: 4,
        title: 'Research Methodology I',
        topics: [
          'Concept of Social Research',
          'Traditional Research',
          'Action Research and Participatory Research',
          'Qualitative Data Construction and Methods of Data Collection',
          'Techniques of Interview',
          'Qualitative methods: Sociometry, Case Studies, observation, coding and content analysis'
        ],
        driveLinks: ['https://drive.google.com/file/d/example172/view']
      },
      {
        number: 5,
        title: 'Research Methodology II',
        topics: [
          'Collection, Tabulation and Presentation of data',
          'Measures of Central Tendency',
          'Dispersion',
          'Moments',
          'Skewness and Kurtosis',
          'Correlation and Regression',
          'Sampling Theory and Test of Significance'
        ],
        driveLinks: ['https://drive.google.com/file/d/example173/view']
      }
    ]
  },
 
  {
    id: 'software-arch',
    name: 'Software Architectures',
    code: 'CS-701',
    description: 'Study of software architecture principles, patterns, and implementation technologies',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Overview of Software Development and Architecture',
        topics: [
          'Software development methodology and software quality model',
          'Different models of software development and their issues',
          'Introduction to software architecture',
          'Evolution of software architecture',
          'Software components and connectors',
          'Common software architecture frameworks',
          'Architecture business cycle',
          'Architectural patterns',
          'Reference model'
        ],
        driveLinks: ['https://drive.google.com/file/d/example174/view']
      },
      {
        number: 2,
        title: 'Software Architecture Models and Styles',
        topics: [
          'Structural models',
          'Framework models',
          'Dynamic models',
          'Process models',
          'Dataflow architecture',
          'Pipes and filters architecture',
          'Call-and return architecture',
          'Data-centered architecture',
          'Layered architecture',
          'Agent based architecture',
          'Micro-services architecture',
          'Reactive Architecture',
          'Representational state transfer architecture'
        ],
        driveLinks: ['https://drive.google.com/file/d/example175/view']
      },
      {
        number: 3,
        title: 'Software Architecture Implementation Technologies',
        topics: [
          'Software Architecture Description Languages (ADLs)',
          'Struts',
          'Hibernate',
          'Node JS',
          'Angular JS',
          'J2EE – JSP, Servlets, EJBs',
          'Middleware: JDBC, JNDI, JMS, RMI and CORBA',
          'Role of UML in software architecture'
        ],
        driveLinks: ['https://drive.google.com/file/d/example176/view']
      },
      {
        number: 4,
        title: 'Software Architecture Analysis and Design',
        topics: [
          'Requirements for architecture',
          'Life-cycle view of architecture design',
          'Analysis methods',
          'Architecture-based economic analysis',
          'Cost Benefit Analysis Method (CBAM)',
          'Architecture Tradeoff Analysis Method (ATAM)',
          'Active Reviews for Intermediate Design (ARID)',
          'Attribute Driven Design method (ADD)',
          'Architecture reuse',
          'Domain-specific Software architecture'
        ],
        driveLinks: ['https://drive.google.com/file/d/example177/view']
      },
      {
        number: 5,
        title: 'Software Architecture Documentation',
        topics: [
          'Principles of sound documentation',
          'Refinement',
          'Context diagrams',
          'Variability',
          'Software interfaces',
          'Documenting behavior of software elements',
          'Documentation package using seven-part template'
        ],
        driveLinks: ['https://drive.google.com/file/d/example178/view']
      }
    ]
  },
  {
    id: 'comp-intel',
    name: 'Computational Intelligence',
    code: 'CS-702A',
    description: 'Study of computational intelligence techniques including fuzzy systems, genetic algorithms, and swarm intelligence',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Computational Intelligence',
        topics: [
          'Types of Computational Intelligence',
          'Components of Computational Intelligence',
          'Concept of Learning/Training model',
          'Parametric Models',
          'Nonparametric Models',
          'Multilayer Networks: Feed Forward network',
          'Feedback network'
        ],
        driveLinks: ['https://drive.google.com/file/d/example179/view']
      },
      {
        number: 2,
        title: 'Fuzzy Systems',
        topics: [
          'Fuzzy set theory',
          'Fuzzy sets and operations',
          'Membership Functions',
          'Fuzzy relations and their composition',
          'Fuzzy Measures',
          'Fuzzy Logic: Fuzzy Rules',
          'Inferencing',
          'Fuzzy Control',
          'Selection of Membership Functions',
          'Fuzzyfication',
          'Rule Based Design & Inferencing',
          'Defuzzyfication'
        ],
        driveLinks: ['https://drive.google.com/file/d/example180/view']
      },
      {
        number: 3,
        title: 'Genetic Algorithms',
        topics: [
          'Basic Genetics',
          'Working Principle',
          'Creation of Offsprings',
          'Encoding',
          'Fitness Function',
          'Selection Functions',
          'Genetic Operators',
          'Reproduction',
          'Crossover',
          'Mutation',
          'Genetic Modeling',
          'Benefits'
        ],
        driveLinks: ['https://drive.google.com/file/d/example181/view']
      },
      {
        number: 4,
        title: 'Rough Set Theory and Decision Models',
        topics: [
          'Rough Set Theory Introduction',
          'Fundamental Concepts',
          'Set approximation',
          'Rough membership',
          'Attributes',
          'Optimization',
          'Hidden Markov Models',
          'Decision tree model'
        ],
        driveLinks: ['https://drive.google.com/file/d/example182/view']
      },
      {
        number: 5,
        title: 'Swarm Intelligence',
        topics: [
          'Introduction to Swarm Intelligence',
          'Ant Colony Optimization',
          'Particle Swarm Optimization',
          'Bee Colony Optimization',
          'Applications of Computational Intelligence'
        ],
        driveLinks: ['https://drive.google.com/file/d/example183/view']
      }
    ]
  },
  {
    id: 'deep-rl',
    name: 'Deep & Reinforcement Learning',
    code: 'CS-702B',
    description: 'Study of deep learning and reinforcement learning techniques and their applications',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Deep Learning Fundamentals',
        topics: [
          'History of Deep Learning',
          'McCulloch Pitts Neuron',
          'Thresholding Logic',
          'Activation functions',
          'Gradient Descent (GD)',
          'Momentum Based GD',
          'Nesterov Accelerated GD',
          'Stochastic GD',
          'AdaGrad',
          'RMSProp',
          'Adam',
          'Eigenvalue Decomposition',
          'Recurrent Neural Networks',
          'Backpropagation through time (BPTT)',
          'Vanishing and Exploding Gradients',
          'Truncated BPTT',
          'GRU',
          'LSTMs',
          'Encoder Decoder Models',
          'Attention Mechanism',
          'Attention over images'
        ],
        driveLinks: ['https://drive.google.com/file/d/example184/view']
      },
      {
        number: 2,
        title: 'Autoencoders and Regularization',
        topics: [
          'Autoencoders and relation to PCA',
          'Regularization in autoencoders',
          'Denoising autoencoders',
          'Sparse autoencoders',
          'Contractive autoencoders',
          'Bias Variance Tradeoff',
          'L2 regularization',
          'Early stopping',
          'Dataset augmentation',
          'Parameter sharing and tying',
          'Injecting noise at input',
          'Ensemble methods',
          'Dropout',
          'Batch Normalization',
          'Instance Normalization',
          'Group Normalization'
        ],
        driveLinks: ['https://drive.google.com/file/d/example185/view']
      },
      {
        number: 3,
        title: 'Advanced Deep Learning Architectures',
        topics: [
          'Greedy Layerwise Pre-training',
          'Better activation functions',
          'Better weight initialization methods',
          'Learning Vectorial Representations Of Words',
          'Convolutional Neural Networks',
          'LeNet, AlexNet, ZF-Net',
          'VGGNet, GoogLeNet, ResNet',
          'Visualizing Convolutional Neural Networks',
          'Guided Backpropagation',
          'Deep Dream',
          'Deep Art',
          'Recent Trends in Deep Learning Architectures'
        ],
        driveLinks: ['https://drive.google.com/file/d/example186/view']
      },
      {
        number: 4,
        title: 'Reinforcement Learning Fundamentals',
        topics: [
          'Introduction to reinforcement learning(RL)',
          'Bandit algorithms – UCB, PAC',
          'Median Elimination',
          'Policy Gradient',
          'Full RL & MDPs',
          'Bellman Optimality',
          'Dynamic Programming',
          'Value iteration',
          'Policy iteration',
          'Q-learning & Temporal Difference Methods',
          'Temporal-Difference Learning',
          'Eligibility Traces',
          'Function Approximation',
          'Least Squares Methods'
        ],
        driveLinks: ['https://drive.google.com/file/d/example187/view']
      },
      {
        number: 5,
        title: 'Advanced Reinforcement Learning',
        topics: [
          'Fitted Q',
          'Deep Q-Learning',
          'Advanced Q-learning algorithms',
          'Learning policies by imitating optimal controllers',
          'DQN & Policy Gradient',
          'Policy Gradient Algorithms for Full RL',
          'Hierarchical RL',
          'POMDPs',
          'Actor-Critic Method',
          'Inverse reinforcement learning',
          'Maximum Entropy Deep Inverse Reinforcement Learning',
          'Generative Adversarial Imitation Learning',
          'Recent Trends in RL Architectures'
        ],
        driveLinks: ['https://drive.google.com/file/d/example188/view']
      }
    ]
  },
  {
    id: 'wireless-mobile',
    name: 'Wireless & Mobile Computing',
    code: 'CS-702C',
    description: 'Study of wireless and mobile computing technologies, protocols, and applications',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Traditional Networks and TCP/IP',
        topics: [
          'Review of LAN, MAN, WAN',
          'Intranet, Internet',
          'Interconnectivity devices',
          'TCP/IP Protocol Architecture',
          'ARP/RARP',
          'IP addressing',
          'IP Datagram format',
          'Routing table format',
          'ICMP Messages',
          'Subnetting, Supernetting and CIDR',
          'DNS',
          'NAT',
          'VLANS',
          'IPV6'
        ],
        driveLinks: ['https://drive.google.com/file/d/example189/view']
      },
      {
        number: 2,
        title: 'Routing and Transport Protocols',
        topics: [
          'Routing Protocols: BGP',
          'Interior Gateway protocol: RIP, OSPF',
          'Multiplexing and ports',
          'TCP: Segment format, Sockets',
          'Synchronization',
          'Three Way Hand Shaking',
          'Variable window size and Flow control',
          'Timeout and Retransmission algorithms',
          'Connection Control',
          'Silly window Syndrome',
          'UDP: Message Encapsulation'
        ],
        driveLinks: ['https://drive.google.com/file/d/example190/view']
      },
      {
        number: 3,
        title: 'Wireless LAN and Mobile IP',
        topics: [
          'Transmission Medium For WLANs',
          'MAC problems',
          'Hidden and Exposed terminals',
          'Near and Far terminals',
          'Infrastructure and Ad hoc Networks',
          'IEEE 802.11',
          'Mobile IP',
          'Ad hoc network routing',
          'OADV, DSDV, DSR, ZRP'
        ],
        driveLinks: ['https://drive.google.com/file/d/example191/view']
      },
      {
        number: 4,
        title: 'Mobile Transport and Cellular Networks',
        topics: [
          'Mobile transport layer',
          'I-TCP, S-TCP, M-TCP',
          'Wireless Cellular networks',
          'Cellular system',
          'GSM Services',
          'System architecture',
          'Localization and calling',
          'Handover and Roaming'
        ],
        driveLinks: ['https://drive.google.com/file/d/example192/view']
      },
      {
        number: 5,
        title: 'Mobile OS and Applications',
        topics: [
          'Mobile Device Operating Systems',
          'Special Constraints & Requirements',
          'Commercial Mobile Operating Systems',
          'Software Development Kit: iOS, Android',
          'MCommerce Structure',
          'Mobile Payment System',
          'Security Issues'
        ],
        driveLinks: ['https://drive.google.com/file/d/example193/view']
      }
    ]
  },
  {
    id: 'big-data',
    name: 'Big Data',
    code: 'CS-702D',
    description: 'Study of big data technologies, processing, and analytics',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Big Data',
        topics: [
          'Big data characteristics',
          'Types of big data',
          'Traditional versus Big data',
          'Evolution of Big data',
          'Challenges with Big Data',
          'Technologies available for Big Data',
          'Infrastructure for Big data',
          'Use of Data Analytics',
          'Desired properties of Big Data system'
        ],
        driveLinks: ['https://drive.google.com/file/d/example194/view']
      },
      {
        number: 2,
        title: 'Hadoop Ecosystem',
        topics: [
          'Introduction to Hadoop',
          'Core Hadoop components',
          'Hadoop Eco system',
          'Hive Physical Architecture',
          'Hadoop limitations',
          'RDBMS Versus Hadoop',
          'Hadoop Distributed File system',
          'Processing Data with Hadoop',
          'Managing Resources and Application with Hadoop YARN',
          'MapReduce programming'
        ],
        driveLinks: ['https://drive.google.com/file/d/example195/view']
      },
      {
        number: 3,
        title: 'Hive and Pig',
        topics: [
          'Hive Architecture',
          'Hive Data types',
          'Hive Query Language',
          'Introduction to Pig',
          'Anatomy of Pig',
          'Pig on Hadoop',
          'Use Case for Pig',
          'ETL Processing',
          'Data types in Pig',
          'Execution model of Pig',
          'Operators and functions'
        ],
        driveLinks: ['https://drive.google.com/file/d/example196/view']
      },
      {
        number: 4,
        title: 'NoSQL and MongoDB',
        topics: [
          'Introduction to NoSQL',
          'NoSQL Business Drivers',
          'NoSQL Data architectural patterns',
          'Variations of NOSQL architectural patterns',
          'Using NoSQL to Manage Big Data',
          'Introduction to MongoDB'
        ],
        driveLinks: ['https://drive.google.com/file/d/example197/view']
      },
      {
        number: 5,
        title: 'Social Network Mining',
        topics: [
          'Applications of social Network mining',
          'Social Networks as a Graph',
          'Types of social Networks',
          'Clustering of social Graphs',
          'Direct Discovery of communities',
          'Introduction to recommender system'
        ],
        driveLinks: ['https://drive.google.com/file/d/example198/view']
      }
    ]
  },
  {
    id: 'crypto-security',
    name: 'Cryptography & Information Security',
    code: 'CS-703A',
    description: 'Study of cryptographic principles, algorithms, and information security',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Mathematical Background and Classical Cryptography',
        topics: [
          'Abstract Algebra',
          'Number Theory',
          'Modular Inverse',
          'Extended Euclid Algorithm',
          'Fermat\'s Little Theorem',
          'Euler Phi-Function',
          'Euler\'s theorem',
          'Principles of Cryptography',
          'Classical Cryptosystem',
          'Cryptanalysis on Substitution Cipher',
          'Play Fair Cipher',
          'Block Cipher',
          'Data Encryption Standard (DES)',
          'Triple DES',
          'Modes of Operation',
          'Stream Cipher'
        ],
        driveLinks: ['https://drive.google.com/file/d/example199/view']
      },
      {
        number: 2,
        title: 'Public Key Cryptography',
        topics: [
          'Advanced Encryption Standard (AES)',
          'Public Key Cryptosystem',
          'Discrete Logarithmic Problem',
          'Diffie-Hellman Key Exchange',
          'RSA Assumptions & Cryptosystem',
          'RSA Signatures & Schnorr Identification Schemes',
          'Primarily Testing',
          'Elliptic Curve over the Reals',
          'Elliptic curve Modulo a Prime',
          'Chinese Remainder Theorem'
        ],
        driveLinks: ['https://drive.google.com/file/d/example200/view']
      },
      {
        number: 3,
        title: 'Message Authentication and Digital Signatures',
        topics: [
          'Message Authentication',
          'Digital Signature',
          'Key Management',
          'Key Exchange',
          'Hash Function',
          'Universal Hashing',
          'Cryptographic Hash Function',
          'MD',
          'Secure Hash Algorithm (SHA)',
          'Digital Signature Standard (DSS)',
          'Cryptanalysis',
          'Secure channel and authentication system'
        ],
        driveLinks: ['https://drive.google.com/file/d/example201/view']
      },
      {
        number: 4,
        title: 'Network and Application Security',
        topics: [
          'Threats in Networks',
          'Network Security Controls',
          'Wireless Security',
          'Honey pots',
          'Traffic Flow Security',
          'Firewalls',
          'IDS',
          'Email Security',
          'IP Security',
          'Web Security',
          'SSL/TLS',
          'Secure Electronic Transaction SET'
        ],
        driveLinks: ['https://drive.google.com/file/d/example202/view']
      },
      {
        number: 5,
        title: 'Security Tools and Attacks',
        topics: [
          'Spoofing tools',
          'Foot printing Tools',
          'Vulnerabilities Scanning Tools',
          'NetBIOS Enumeration',
          'Steganography Tools',
          'Trojans Detection Tools',
          'Lan Scanner Tools',
          'DoS Attack Tools'
        ],
        driveLinks: ['https://drive.google.com/file/d/example203/view']
      }
    ]
  },
  {
    id: 'data-mining',
    name: 'Data Mining and Warehousing',
    code: 'CS-703B',
    description: 'Study of data warehousing, mining techniques, and pattern recognition',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Data Warehousing Fundamentals',
        topics: [
          'Introduction to Data Warehousing',
          'Delivery Process',
          'Data warehouse Architecture',
          'Data Preprocessing',
          'Data cleaning',
          'Data Integration and transformation',
          'Data reduction',
          'Data warehouse Design',
          'Datawarehouse schema',
          'Partitioning strategy',
          'Data warehouse Implementation',
          'Data Marts',
          'Meta Data',
          'Multidimensional Data model'
        ],
        driveLinks: ['https://drive.google.com/file/d/example204/view']
      },
      {
        number: 2,
        title: 'OLAP Systems',
        topics: [
          'Basic concepts',
          'OLAP queries',
          'Types of OLAP servers',
          'OLAP operations'
        ],
        driveLinks: ['https://drive.google.com/file/d/example205/view']
      },
      {
        number: 3,
        title: 'Data Mining Fundamentals',
        topics: [
          'Data Types',
          'Quality of data',
          'Data Preprocessing',
          'Similarity measures',
          'Summary statistics',
          'Data distributions',
          'Basic data mining tasks',
          'Data Mining V/s knowledge discovery',
          'Issues in Data mining',
          'Fuzzy sets and fuzzy logic'
        ],
        driveLinks: ['https://drive.google.com/file/d/example206/view']
      },
      {
        number: 4,
        title: 'Supervised Learning',
        topics: [
          'Classification',
          'Statistical-based algorithms',
          'Distance-based algorithms',
          'Decision tree-based algorithms',
          'Neural network-based algorithms',
          'Rule-based algorithms',
          'Probabilistic Classifiers'
        ],
        driveLinks: ['https://drive.google.com/file/d/example207/view']
      },
      {
        number: 5,
        title: 'Clustering and Association Rules',
        topics: [
          'Hierarchical algorithms',
          'Partitional algorithms',
          'Clustering large databases',
          'BIRCH',
          'DBSCAN',
          'CURE algorithms',
          'Association rules',
          'Apriori algorithm',
          'FP growth algorithms'
        ],
        driveLinks: ['https://drive.google.com/file/d/example208/view']
      }
    ]
  },
  {
    id: 'agile',
    name: 'Agile Software Development',
    code: 'CS-703C',
    description: 'Study of agile methodologies and software development practices',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Fundamentals of Agile Process',
        topics: [
          'Introduction and background',
          'Agile Manifesto and Principles',
          'Stakeholders and Challenges',
          'Overview of Agile Development Models',
          'Scrum',
          'Extreme Programming',
          'Feature Driven Development',
          'Crystal',
          'Kanban',
          'Lean Software Development'
        ],
        driveLinks: ['https://drive.google.com/file/d/example209/view']
      },
      {
        number: 2,
        title: 'Agile Projects Planning',
        topics: [
          'Planning for Agile Teams',
          'Scrum Teams',
          'XP Teams',
          'General Agile Teams',
          'Team Distribution',
          'Agile Project Lifecycles',
          'Phase Activities',
          'Product Vision',
          'Release Planning',
          'Product Backlog',
          'User Stories',
          'Prioritizing and Estimating',
          'Release Plan',
          'Monitoring and Adapting',
          'Managing Risks and Issues',
          'Retrospectives'
        ],
        driveLinks: ['https://drive.google.com/file/d/example210/view']
      },
      {
        number: 3,
        title: 'Scrum Framework',
        topics: [
          'Agile Scrum Framework',
          'Scrum Artifacts',
          'Meetings',
          'Activities and Roles',
          'Scrum Team Simulation',
          'Scrum Planning Principles',
          'Product and Release Planning',
          'Sprinting',
          'User story definition',
          'Acceptance tests',
          'Burn down chart',
          'Daily scrum',
          'Scrum Case Study'
        ],
        driveLinks: ['https://drive.google.com/file/d/example211/view']
      },
      {
        number: 4,
        title: 'Extreme Programming',
        topics: [
          'XP Lifecycle',
          'The XP Team',
          'XP Concepts',
          'Refactoring',
          'Technical Debt',
          'Timeboxing',
          'Stories',
          'Velocity',
          'Adopting XP',
          'Applying XP',
          'Pair Programming',
          'XP Case Study'
        ],
        driveLinks: ['https://drive.google.com/file/d/example212/view']
      },
      {
        number: 5,
        title: 'Agile Design and Quality Assurance',
        topics: [
          'Agile design practices',
          'Role of design Principles',
          'Refactoring Techniques',
          'Continuous Integration',
          'Automated build tools',
          'Version control',
          'Agile Interaction Design',
          'Agile approach to Quality Assurance',
          'Test Driven Development',
          'Pair programming'
        ],
        driveLinks: ['https://drive.google.com/file/d/example213/view']
      }
    ]
  },
  {
    id: 'disaster-mgmt',
    name: 'Disaster Management',
    code: 'CS-703D',
    description: 'Study of disaster management principles, strategies, and applications',
    semester: 7,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to Disasters',
        topics: [
          'Definition: Disaster, Hazard, Vulnerability, Resilience, Risks',
          'Types of disasters',
          'Classification and Causes',
          'Impacts including social, economic, political, environmental, health, psychosocial',
          'Differential impacts',
          'Global trends in disasters',
          'Urban disasters',
          'Pandemics',
          'Complex emergencies',
          'Climate change',
          'Dos and Dont\'s during various types of Disasters'
        ],
        driveLinks: ['https://drive.google.com/file/d/example214/view']
      },
      {
        number: 2,
        title: 'Disaster Risk Reduction',
        topics: [
          'Disaster cycle - Phases',
          'Culture of safety',
          'Prevention and mitigation',
          'Community based DRR',
          'Structural-nonstructural measures',
          'Roles and responsibilities',
          'Institutional Processes and Framework',
          'State Disaster Management Authority(SDMA)',
          'Early Warning System',
          'Advisories from Appropriate Agencies'
        ],
        driveLinks: ['https://drive.google.com/file/d/example215/view']
      },
      {
        number: 3,
        title: 'Disasters and Development',
        topics: [
          'Factors affecting Vulnerabilities',
          'Differential impacts',
          'Impact of Development projects',
          'Climate Change Adaptation',
          'IPCC Scenario',
          'Scenarios in the context of India',
          'Indigenous knowledge',
          'Appropriate technology',
          'Local resources'
        ],
        driveLinks: ['https://drive.google.com/file/d/example216/view']
      },
      {
        number: 4,
        title: 'Disaster Risk Management in India',
        topics: [
          'Hazard and Vulnerability profile of India',
          'Components of Disaster Relief',
          'Institutional arrangements',
          'Disaster Management Act and Policy',
          'Related policies, plans, programmes and legislation',
          'Role of GIS and Information Technology',
          'Preparedness, Risk Assessment',
          'Response and Recovery Phases',
          'Disaster Damage Assessment'
        ],
        driveLinks: ['https://drive.google.com/file/d/example217/view']
      },
      {
        number: 5,
        title: 'Applications and Case Studies',
        topics: [
          'Landslide Hazard Zonation',
          'Earthquake Vulnerability Assessment',
          'Drought Assessment',
          'Coastal Flooding',
          'Storm Surge Assessment',
          'Floods: Fluvial and Pluvial Flooding',
          'Forest Fire',
          'Man Made disasters',
          'Space Based Inputs',
          'Field works related to disaster management'
        ],
        driveLinks: ['https://drive.google.com/file/d/example218/view']
      }
    ]
  },
  // Semester 8 Subjects
  {
    id: 'cs801',
    name: 'Internet of Things',
    code: 'CS801',
    description: 'Study of IoT fundamentals, architecture, sensors, networking, and applications',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'IoT Fundamentals and Architecture',
        topics: [
          'IoT definition and Characteristics',
          'IoT conceptual and architectural framework',
          'Components of IoT ecosystems',
          'Physical and logical design of IoT',
          'IoT enablers',
          'Modern day IoT applications',
          'M2M communications',
          'IoT vs M2M, IoT vs WoT',
          'IoT reference architecture',
          'IoT Network configurations',
          'IoT LAN, IoT WAN',
          'IoT Node, IoT Gateway, IoT Proxy',
          'Review of Basic Microcontrollers and interfacing'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/1']
      },
      {
        number: 2,
        title: 'Sensors and Actuators',
        topics: [
          'Define Sensor and Basic components',
          'Challenges of a sensor node',
          'Sensor features and resolution',
          'Sensor classes: Analog, Digital, Scalar, Vector Sensors',
          'Sensor Types, bias, drift, Hysteresis error, quantization error',
          'Actuator and Actuator types',
          'Hydraulic, Pneumatic, electrical actuators',
          'Thermal/magnetic, mechanical actuators',
          'Soft actuators'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/2']
      },
      {
        number: 3,
        title: 'IoT Networking',
        topics: [
          'Basics of IoT Networking',
          'IoT Components',
          'Functional components of IoT',
          'IoT service oriented architecture',
          'IoT challenges',
          '6LowPAN',
          'IEEE 802.15.4',
          'ZigBee and its types',
          'RFID Features and working principle',
          'NFC (Near Field communication)',
          'Bluetooth',
          'Wireless Sensor Networks and Applications'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/3']
      },
      {
        number: 4,
        title: 'IoT Protocols',
        topics: [
          'MQTT and its methods',
          'MQTT communication, topics and applications',
          'SMQTT',
          'CoAP message types',
          'CoAP Request-Response model',
          'XMPP',
          'AMQP features and components',
          'AMQP frame types'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/4']
      },
      {
        number: 5,
        title: 'IoT Platforms and Applications',
        topics: [
          'IoT Platforms: Arduino, Raspberry Pi',
          'Other IoT Platforms',
          'Data Analytics for IoT',
          'Cloud for IoT',
          'Cloud storage models & communication APIs',
          'Attacks in IoT system',
          'Vulnerability analysis in IoT',
          'IoT case studies: Smart Home, Smart farming'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/5']
      }
    ]
  },
  {
    id: 'cs802a',
    name: 'Block Chain Technologies',
    code: 'CS802(A)',
    description: 'Study of blockchain fundamentals, cryptocurrency, and enterprise applications',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Blockchain Fundamentals',
        topics: [
          'Overview of Blockchain',
          'Public Ledgers',
          'Bitcoin',
          'Smart Contracts',
          'Block in a Blockchain',
          'Transactions',
          'Distributed Consensus',
          'Public vs Private Blockchain',
          'Understanding Cryptocurrency to Blockchain',
          'Permissioned Model of Blockchain',
          'Security aspects of Blockchain'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/6']
      },
      {
        number: 2,
        title: 'Cryptographic Primitives',
        topics: [
          'Cryptographic Hash Function',
          'Properties of a hash function',
          'Hash pointer and Merkle tree',
          'Digital Signature',
          'Public Key Cryptography',
          'Basic cryptocurrency'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/7']
      },
      {
        number: 3,
        title: 'Bitcoin and Blockchain',
        topics: [
          'Creation of coins',
          'Payments and double spending',
          'Bitcoin Scripts',
          'Bitcoin P2P Network',
          'Transaction in Bitcoin Network',
          'Block Mining',
          'Block propagation and block relay',
          'Distributed consensus in open environments',
          'Consensus in a Bitcoin network',
          'Proof of Work (PoW)',
          'Hash Cash PoW',
          'Bitcoin PoW',
          'Attacks on PoW',
          'Proof of Stake, Burn and Elapsed Time',
          'Mining Difficulty',
          'Mining Pool'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/8']
      },
      {
        number: 4,
        title: 'Enterprise Blockchain',
        topics: [
          'Permissioned model and use cases',
          'Design issues for Permissioned blockchains',
          'Execute contracts',
          'State machine replication',
          'Consensus models for permissioned blockchain',
          'Distributed consensus in closed environment',
          'Paxos, RAFT Consensus',
          'Byzantine general problem',
          'Byzantine fault tolerant system',
          'Lamport-Shostak-Pease BFT Algorithm',
          'BFT over Asynchronous systems'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/9']
      },
      {
        number: 5,
        title: 'Blockchain Applications',
        topics: [
          'Cross border payments',
          'Know Your Customer (KYC)',
          'Food Security',
          'Mortgage over Blockchain',
          'Blockchain enabled Trade',
          'We Trade – Trade Finance Network',
          'Supply Chain Financing',
          'Identity on Blockchain',
          'Hyperledger Fabric Architecture',
          'Writing smart contracts',
          'Overview of Ripple and Corda'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/10']
      }
    ]
  },
  {
    id: 'cs802b',
    name: 'Cloud Computing',
    code: 'CS802(B)',
    description: 'Study of cloud computing fundamentals, services, and applications',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Service Oriented Architecture',
        topics: [
          'Introduction to SOA',
          'Web Services',
          'Basic Web Services Architecture',
          'SOAP, WSDL and UDDI',
          'RESTful services',
          'Software as a Service',
          'Platform as a Service',
          'Organizational scenarios of clouds',
          'Administering & Monitoring cloud services',
          'Benefits and limitations',
          'Study of a Hypervisor'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/11']
      },
      {
        number: 2,
        title: 'Cloud Computing Technologies',
        topics: [
          'Utility Computing',
          'Elastic Computing',
          'Ajax and asynchronous interfaces',
          'Mashups and User interface',
          'Virtualization Technology',
          'Multitenant software',
          'Multi-entity support',
          'Multi-schema approach',
          'Multi-tenancy using cloud data stores'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/12']
      },
      {
        number: 3,
        title: 'Cloud Data Management',
        topics: [
          'Relational databases in cloud',
          'Cloud file systems: GFS and HDFS',
          'Big Table, HBase and Dynamo',
          'Map-Reduce and extensions',
          'Parallel computing',
          'Map-Reduce model',
          'Enterprise batch processing',
          'Applications of MapReduce'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/13']
      },
      {
        number: 4,
        title: 'Cloud Security',
        topics: [
          'Cloud security fundamentals',
          'Vulnerability assessment',
          'Privacy and Security in cloud',
          'Cloud computing security architecture',
          'Trusted Cloud computing',
          'Virtualization security management',
          'VM Security Recommendations',
          'Secure Execution Environments',
          'Communications in cloud'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/14']
      },
      {
        number: 5,
        title: 'Cloud Computing Issues',
        topics: [
          'Issues in cloud computing',
          'Implementing real time application',
          'QOS Issues in Cloud',
          'Dependability',
          'Data migration',
          'Streaming in Cloud',
          'Cloud Middleware',
          'Mobile Cloud Computing',
          'Inter Cloud issues',
          'Grid of clouds',
          'Sky computing',
          'Load balancing',
          'Resource optimization',
          'Monitoring in Cloud',
          'Cloud platforms installation',
          'Performance evaluation'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/15']
      }
    ]
  },
  {
    id: 'cs802c',
    name: 'High Performance Computing',
    code: 'CS802(C)',
    description: 'Study of modern processors, parallel computing, and performance optimization',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Modern Processors',
        topics: [
          'General Purpose cache based architecture',
          'Performance metrics and benchmarks',
          'Moors Law',
          'Pipelining',
          'Super clarity',
          'SIMD',
          'Memory Hierarchies',
          'Multi core processors',
          'Multi threaded processors',
          'Vector processors',
          'Basic Optimizations for serial codes',
          'Scalar profiling',
          'Common sense optimizations',
          'Role of compilers',
          'C++ optimizations'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/16']
      },
      {
        number: 2,
        title: 'Data Access and Parallel Computers',
        topics: [
          'Data access optimizations',
          'Balance analysis and light speed estimates',
          'Storage order',
          'Algorithm classifications',
          'Case studies for data access optimizations',
          'Shared memory computers',
          'Distributed memory computers',
          'Hybrid systems',
          'Network computers'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/17']
      },
      {
        number: 3,
        title: 'Parallel Computing Basics',
        topics: [
          'Data and functional parallelism',
          'Parallel scalability laws',
          'Metrics and factors',
          'Efficiency and load imbalance',
          'Shared memory parallel programming with OpenMP',
          'Parallel execution',
          'Data scoping',
          'Work sharing using loops',
          'Synchronization',
          'Reductions',
          'Loop scheduling',
          'Tasking'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/18']
      },
      {
        number: 4,
        title: 'OpenMP Programming',
        topics: [
          'Program profiling',
          'Performance pitfalls',
          'Improving OpenMP work sharing constructs',
          'Determining overheads for short loops',
          'Serialization',
          'False sharing'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/19']
      },
      {
        number: 5,
        title: 'MPI Programming',
        topics: [
          'Message passing',
          'Point-to-point communication',
          'Collective communication',
          'Non-blocking communication',
          'Virtual topologies',
          'MPI performance tools',
          'Communication parameters',
          'Impact of synchronizations',
          'Reductions in communication overhead'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/20']
      }
    ]
  },
  {
    id: 'cs802d',
    name: 'Object Oriented Software Engineering',
    code: 'CS802(D)',
    description: 'Study of OO concepts, UML, and software development methodologies',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'OO Concepts and Principles',
        topics: [
          'The Object Oriented Paradigm',
          'Basic Concepts',
          'Software Development Life Cycle',
          'Model Architectures'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/21']
      },
      {
        number: 2,
        title: 'Rational Unified Process',
        topics: [
          'Basic Concepts of RUP',
          'Symptoms in Software Development',
          'Root Causes',
          'Best Practices of RUP',
          'RUP software life cycle',
          '4+1 view model',
          'Various Workflows'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/22']
      },
      {
        number: 3,
        title: 'UML and OO Analysis',
        topics: [
          'UML Notations and Relationships',
          'Stereotypes',
          'UML based tools',
          'Conventional vs OO analysis approach',
          'Requirement analysis',
          'Use case diagram',
          'Activity diagram',
          'Analysis class Model'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/23']
      },
      {
        number: 4,
        title: 'OO Design and Modeling',
        topics: [
          'Conventional vs OO design approach',
          'Design of CRC cards',
          'Class diagram',
          'Behavioral Modeling',
          'Interaction Diagram',
          'State chart Diagram',
          'Component and deployment Diagram',
          'Case Studies: ATM, Payroll, Course Registration'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/24']
      },
      {
        number: 5,
        title: 'OO Testing and Patterns',
        topics: [
          'Correctness and consistency of OOA & OOD models',
          'Testing Strategies',
          'Test cases for OO software process',
          'Project Management',
          'Rational Tool Mentors',
          'Introduction to Design Patterns'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/25']
      }
    ]
  },
  {
    id: 'cs803a',
    name: 'Image Processing and Computer Vision',
    code: 'CS803(A)',
    description: 'Study of computer vision fundamentals, image processing, and recognition',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Introduction to CVIP',
        topics: [
          'Basics of CVIP',
          'History and Evolution',
          'CV Models',
          'Image Filtering',
          'Image Representations',
          'Image Statistics',
          'Recognition Methodology',
          'Morphological Image Processing',
          'Dilation and Erosion',
          'Opening and Closing',
          'Hit-or-Miss transformation',
          'Morphological algorithms',
          'Thinning and Thickening',
          'Region growing and shrinking'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/26']
      },
      {
        number: 2,
        title: 'Image Representation and Description',
        topics: [
          'Representation schemes',
          'Boundary descriptors',
          'Region descriptors',
          'Binary Machine Vision',
          'Thresholding',
          'Segmentation',
          'Connected component labeling',
          'Hierarchal segmentation',
          'Spatial clustering',
          'Split & merge',
          'Rule-based Segmentation',
          'Motion-based segmentation',
          'Area Extraction',
          'Edge and Line-Linking',
          'Hough transform',
          'Line and Curve fitting'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/27']
      },
      {
        number: 3,
        title: 'Region and Boundary Analysis',
        topics: [
          'Region properties',
          'External points',
          'Spatial moments',
          'Mixed spatial gray-level moments',
          'Boundary analysis',
          'Signature properties',
          'Shape numbers',
          'Distance relational approach',
          'Ordered structural matching',
          'View class matching',
          'Models database organization'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/28']
      },
      {
        number: 4,
        title: 'Recognition and Matching',
        topics: [
          'Facet Model Recognition',
          'Labeling lines',
          'Understanding line drawings',
          'Classification of shapes',
          'Consisting labeling problem',
          'Back-tracking Algorithm',
          'Perspective Projective geometry',
          'Inverse perspective Projection',
          'Photogrammetric-from 2D to 3D',
          'Image matching',
          'Object Models And Matching',
          '2D representation',
          'Global vs Local features'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/29']
      },
      {
        number: 5,
        title: 'Knowledge Based Vision',
        topics: [
          'Knowledge representation',
          'Control-strategies',
          'Information Integration',
          'Object recognition methods',
          'Hough transforms',
          'Shape correspondence',
          'Shape matching',
          'Principal component analysis',
          'Feature extraction',
          'Neural network and Machine learning for image shape recognition'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/30']
      }
    ]
  },
  {
    id: 'cs803b',
    name: 'Game Theory with Engineering Applications',
    code: 'CS803(B)',
    description: 'Study of game theory fundamentals and engineering applications',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Game Design Fundamentals',
        topics: [
          'What is a Game',
          'Game Design Schema',
          'Game Design fundamentals',
          'Engineering application of game theory',
          'Design Process',
          'Iterative design',
          'Commissions',
          'Design & Testing of the Board Game',
          'Meaningful play',
          'Discernable & integrated play'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/31']
      },
      {
        number: 2,
        title: 'Design and Semiotics',
        topics: [
          'Introducing design',
          'Design & meaning',
          'Semiotics overview',
          'Four semiotic Concepts',
          'Context Shapes interpretations'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/32']
      },
      {
        number: 3,
        title: 'Systems and Interactivity',
        topics: [
          'Introduction to Systems',
          'Elements of a System',
          'Framing Systems',
          'Open & closed systems',
          'Introduction to Interactivity',
          'Multivalent model of interactivity',
          'Interaction & choice',
          'Choice molecules',
          'Anatomy of choice',
          'Space of possibility'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/33']
      },
      {
        number: 4,
        title: 'Game Definition and Rules',
        topics: [
          'Overview of digital games',
          'Magic circle',
          'Primary Schemas',
          'Conceptual framework',
          'Rule, play, culture',
          'Defining rules',
          'Quality of rules',
          'Rules in context',
          'Rules on three levels',
          'Identity of a Game',
          'Specificity of Rules',
          'Rules of Digital games'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/34']
      },
      {
        number: 5,
        title: 'Case Studies',
        topics: [
          'Tic Tac Toe',
          'Deck of Cards',
          'Game theory applications in engineering',
          'Practical implementations',
          'Analysis of game mechanics'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/35']
      }
    ]
  },
  {
    id: 'cs803c',
    name: 'Internet of Things',
    code: 'CS803(C)',
    description: 'Study of IoT fundamentals, architecture, and applications',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'IoT Fundamentals',
        topics: [
          'IoT definition and Characteristics',
          'IoT conceptual and architectural framework',
          'Components of IoT ecosystems',
          'Physical and logical design of IoT',
          'IoT enablers',
          'Modern day IoT applications',
          'M2M communications',
          'IoT vs M2M, IoT vs WoT',
          'IoT reference architecture',
          'IoT Network configurations',
          'IoT LAN, IoT WAN',
          'IoT Node, IoT Gateway, IoT Proxy',
          'Review of Basic Microcontrollers'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/36']
      },
      {
        number: 2,
        title: 'Sensors and Actuators',
        topics: [
          'Define Sensor and Basic components',
          'Challenges of a sensor node',
          'Sensor features and resolution',
          'Sensor classes',
          'Sensor Types and errors',
          'Actuator and Actuator types',
          'Hydraulic, Pneumatic actuators',
          'Electrical, thermal/magnetic actuators',
          'Mechanical and soft actuators'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/37']
      },
      {
        number: 3,
        title: 'IoT Networking',
        topics: [
          'Basics of IoT Networking',
          'IoT Components',
          'Functional components of IoT',
          'IoT service oriented architecture',
          'IoT challenges',
          '6LowPAN',
          'IEEE 802.15.4',
          'ZigBee and its types',
          'RFID Features and applications',
          'NFC',
          'Bluetooth',
          'Wireless Sensor Networks'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/38']
      },
      {
        number: 4,
        title: 'IoT Protocols',
        topics: [
          'MQTT and its methods',
          'MQTT communication',
          'SMQTT',
          'CoAP message types',
          'CoAP Request-Response model',
          'XMPP',
          'AMQP features',
          'AMQP frame types'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/39']
      },
      {
        number: 5,
        title: 'IoT Platforms and Applications',
        topics: [
          'IoT Platforms: Arduino, Raspberry Pi',
          'Data Analytics for IoT',
          'Cloud for IoT',
          'Cloud storage models',
          'Communication APIs',
          'Attacks in IoT system',
          'Vulnerability analysis',
          'IoT case studies'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/40']
      }
    ]
  },
  {
    id: 'cs803d',
    name: 'Managing Innovation and Entrepreneurship',
    code: 'CS803(D)',
    description: 'Study of innovation management and entrepreneurial processes',
    semester: 8,
    branch: 'Computer Science',
    chapters: [
      {
        number: 1,
        title: 'Innovation Fundamentals',
        topics: [
          'Innovation definition and classification',
          'Innovation and entrepreneurship relationship',
          'Creation of competitive advantage',
          'Innovative models',
          'Product innovation',
          'Process innovation',
          'Organizational innovation',
          'Marketing innovation'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/41']
      },
      {
        number: 2,
        title: 'Innovation Sources and Methods',
        topics: [
          'Sources of innovation',
          'Push and pull factors',
          'Analogies',
          'Transfer of technology',
          'Creative methods',
          'Innovation management approaches',
          'Agile management',
          'Six Thinking Hats',
          'NUF test'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/42']
      },
      {
        number: 3,
        title: 'Innovation Process Management',
        topics: [
          'Project approach to innovation',
          'Stage Gate method',
          'Business models adaptation',
          'In-house business development',
          'Open Innovation concept',
          'Limits and benefits',
          'Business development strategies'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/43']
      },
      {
        number: 4,
        title: 'Human-Centered Innovation',
        topics: [
          'Innovations aimed at humans',
          'Role of co-creation',
          'Innovation process strategy',
          'Strategy types and selection',
          'Implementation approaches'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/44']
      },
      {
        number: 5,
        title: 'Innovation Evaluation',
        topics: [
          'Measurement of innovation benefits',
          'Financial and non-financial metrics',
          'Barriers to innovation',
          'Innovation failure causes',
          'Post-audits of projects',
          'Innovation workshop organization',
          'Facilitation techniques'
        ],
        driveLinks: ['https://drive.google.com/drive/folders/45']
      }
    ]
  }
];
