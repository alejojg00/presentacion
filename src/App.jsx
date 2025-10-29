import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingDown, DollarSign, AlertTriangle, Target, CheckCircle, BarChart3, Building2, Globe } from 'lucide-react';

const PresentacionTechFlow = () => {
  const [slide, setSlide] = useState(0);

  const slides = [
    // Slide 0 - Portada
    {
      title: "TechFlow Colombia",
      subtitle: "Análisis de Impacto Económico y Estrategias de Mitigación",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center space-y-4">
            <Building2 className="w-24 h-24 mx-auto text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-800">TechFlow Colombia</h1>
            <h2 className="text-2xl text-gray-600">Análisis de Impacto Económico</h2>
            <p className="text-xl text-gray-500">Cortes I, II y III - 2025</p>
          </div>
          <div className="text-center space-y-2 mt-8">
            <p className="text-lg font-semibold">Fundamentos de Administración y Economía</p>
            <p className="text-md">Universidad ECCI</p>
            <p className="text-md">Docente: Edgar Sanabria Torres</p>
            <p className="text-sm mt-4">Alejandro Jimenez (111982)</p>
            <p className="text-sm text-gray-500">29 Octubre 2025 - Bogotá D.C.</p>
          </div>
        </div>
      )
    },
    
    // Slide 1 - Introducción
    {
      title: "Introducción",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Contexto de la Empresa</h3>
            <p className="text-gray-700 leading-relaxed">
              TechFlow Colombia es una empresa del sector tecnológico fundada en 2021, especializada en el desarrollo de software personalizado y aplicaciones móviles para pymes. Con un equipo de 15 empleados y una facturación anual de $800 millones COP, la empresa ha logrado construir una cartera sólida de 25 clientes con una tasa de retención del 85%.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-3 text-green-800">Estrategia Actual (Corte II)</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Tras un análisis DOFA exhaustivo, TechFlow ha decidido implementar un <span className="font-semibold">modelo de negocio híbrido</span> que combina:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Desarrollo de un producto SaaS base estandarizado</li>
              <li>Servicios de personalización según necesidades específicas</li>
              <li>Ingreso recurrente predecible con flexibilidad competitiva</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
            <h3 className="text-xl font-semibold mb-3 text-amber-800">Propósito del Análisis (Corte III)</h3>
            <p className="text-gray-700 leading-relaxed">
              En el actual contexto económico colombiano, es crucial evaluar cómo los fenómenos macroeconómicos pueden impactar la viabilidad de esta estrategia y el funcionamiento operativo de TechFlow, con el fin de diseñar acciones preventivas que aseguren la sostenibilidad del negocio.
            </p>
          </div>
        </div>
      )
    },

    // Slide 2 - Justificación
    {
      title: "Justificación",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2" />
              ¿Por qué este análisis es crucial?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Las empresas tecnológicas emergentes como TechFlow operan en un entorno altamente vulnerable a las fluctuaciones macroeconómicas. La comprensión profunda de estos fenómenos y su impacto específico permite anticipar escenarios adversos y tomar decisiones estratégicas informadas que protejan la rentabilidad y el crecimiento de la organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-red-500">
              <h4 className="font-semibold text-lg mb-3 text-red-700">Vulnerabilidades Identificadas</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Dependencia de clientes:</strong> 60% de ingresos concentrados en 3 clientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Capital limitado:</strong> Restricción para proyectos grandes (+$100M COP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Sensibilidad cambiaria:</strong> Costos de infraestructura en USD (servidores, licencias)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Competencia internacional:</strong> Nearshoring con precios en monedas fuertes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500">
              <h4 className="font-semibold text-lg mb-3 text-blue-700">Importancia del Análisis</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Protección financiera:</strong> Salvaguardar la inversión de $90M en el modelo híbrido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Sostenibilidad operativa:</strong> Asegurar el punto de equilibrio de 65 clientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Competitividad:</strong> Mantener la ventaja del 30% en precios frente a multinacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Crecimiento:</strong> Garantizar la expansión proyectada a mercados latinoamericanos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg border border-blue-200">
            <p className="text-gray-800 text-center font-medium">
              <span className="text-blue-600">Un análisis económico robusto</span> no solo identifica amenazas, sino que transforma la incertidumbre en <span className="text-purple-600">oportunidades estratégicas</span> para fortalecer la posición competitiva de TechFlow en el mercado tecnológico colombiano.
            </p>
          </div>
        </div>
      )
    },

    // Slide 3 - Fenómeno 1: Inflación
    {
      title: "Fenómeno Económico 1: Inflación Alta Persistente",
      content: (
        <div className="space-y-5">
          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
            <h3 className="text-xl font-semibold mb-3 text-red-800 flex items-center">
              <TrendingDown className="w-6 h-6 mr-2" />
              Definición y Contexto
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La <strong>inflación</strong> es el aumento generalizado y sostenido de los precios de bienes y servicios en una economía durante un período determinado, lo que reduce el poder adquisitivo de la moneda. En Colombia, la inflación ha mostrado niveles elevados en 2023-2024, superando la meta del Banco de la República (3% ±1%), alcanzando cifras cercanas al 9-13% anual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Causas Principales</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">1.</span>
                  <span><strong>Inflación importada:</strong> Aumento de precios internacionales de combustibles, alimentos y materias primas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">2.</span>
                  <span><strong>Devaluación del peso:</strong> Encarecimiento de importaciones y costos en dólares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">3.</span>
                  <span><strong>Presiones de demanda:</strong> Recuperación post-pandemia con oferta restringida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">4.</span>
                  <span><strong>Expectativas inflacionarias:</strong> Indexación de salarios y contratos</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Mecanismos de Transmisión</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Costos operativos:</strong> Aumento en arriendos, servicios públicos, transporte y salarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Tasas de interés:</strong> El Banco de la República sube tasas para controlar inflación (13% en 2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Poder adquisitivo:</strong> Los clientes disponen de menos recursos para invertir en tecnología</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Incertidumbre:</strong> Posposición de decisiones de inversión empresarial</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2 text-gray-800">Indicadores Relevantes Colombia (2023-2024)</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="text-2xl font-bold text-red-600">11.8%</p>
                <p className="text-xs text-gray-600">Inflación promedio 2023</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="text-2xl font-bold text-red-600">13.25%</p>
                <p className="text-xs text-gray-600">Tasa de interés pico 2023</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="text-2xl font-bold text-orange-600">+18%</p>
                <p className="text-xs text-gray-600">Aumento salario mínimo 2024</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="text-2xl font-bold text-orange-600">+25%</p>
                <p className="text-xs text-gray-600">Incremento servicios públicos</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4 - Fenómeno 2: Devaluación
    {
      title: "Fenómeno Económico 2: Devaluación del Peso Colombiano",
      content: (
        <div className="space-y-5">
          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-700">
            <h3 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
              <DollarSign className="w-6 h-6 mr-2" />
              Definición y Contexto
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La <strong>devaluación</strong> es la pérdida de valor de la moneda nacional frente a divisas extranjeras, especialmente el dólar estadounidense. El peso colombiano ha experimentado una devaluación significativa, pasando de aproximadamente $3,800 COP/USD en 2021 a niveles superiores a $4,000-4,500 COP/USD en 2023-2024, representando una depreciación cercana al 15-20%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Factores Determinantes</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">1.</span>
                  <span><strong>Precios del petróleo:</strong> Volatilidad en el principal producto de exportación colombiano</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">2.</span>
                  <span><strong>Política monetaria Fed:</strong> Fortalecimiento del dólar por tasas altas en EE.UU.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">3.</span>
                  <span><strong>Déficit en cuenta corriente:</strong> Importaciones superan exportaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">4.</span>
                  <span><strong>Riesgo país:</strong> Percepción de inversionistas sobre estabilidad política y económica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">5.</span>
                  <span><strong>Salida de capitales:</strong> Inversión extranjera buscando mercados más estables</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Impacto en Sector Tecnológico</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Infraestructura cloud:</strong> Servicios AWS, Azure, Google Cloud facturados en USD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Licencias de software:</strong> Herramientas de desarrollo, diseño y gestión importadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Capacitación:</strong> Certificaciones y cursos internacionales en dólares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Competencia:</strong> Empresas nearshoring cobran en USD, más atractivos con peso débil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span><strong>Equipos:</strong> Hardware y dispositivos tecnológicos importados</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2 text-gray-800">Evolución Tasa de Cambio (Referencial)</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="text-2xl font-bold text-green-600">$3,750</p>
                <p className="text-xs text-gray-600">COP/USD (2021)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="text-2xl font-bold text-yellow-600">$4,100</p>
                <p className="text-xs text-gray-600">COP/USD (2022)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="text-2xl font-bold text-orange-600">$4,350</p>
                <p className="text-xs text-gray-600">COP/USD (2023)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="text-2xl font-bold text-red-600">16%</p>
                <p className="text-xs text-gray-600">Devaluación acumulada</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5 - Impacto en TechFlow
    {
      title: "Impacto de los Fenómenos en TechFlow Colombia",
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h3 className="text-lg font-semibold mb-3 text-red-800 flex items-center">
                <TrendingDown className="w-5 h-5 mr-2" />
                Impacto de la Inflación
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold text-red-700 mb-1">1. Incremento de Costos Operativos</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Salarios: +18% presión salarial ($45M → $53M/mes)</li>
                    <li>• Arriendo: +15% ajuste anual ($3.5M → $4M/mes)</li>
                    <li>• Servicios: +25% energía y conectividad</li>
                    <li>• <strong>Total costos fijos: $58M → $68M (+17%)</strong></li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold text-red-700 mb-1">2. Reducción de Demanda</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Pymes postergan inversiones en tecnología</li>
                    <li>• Proyección: -25% nuevos contratos</li>
                    <li>• Riesgo: No alcanzar 65 clientes (punto equilibrio)</li>
                    <li>• Presión sobre tasa de retención (85% → ¿?)</li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold text-red-700 mb-1">3. Desafío de Precios</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Dilema: ¿Trasladar costos al cliente?</li>
                    <li>• Precio actual: $1.2M/mes</li>
                    <li>• Reajuste necesario: +15-20% ($1.4M/mes)</li>
                    <li>• Riesgo: Perder ventaja competitiva del 30%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
              <h3 className="text-lg font-semibold mb-3 text-green-800 flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Impacto de la Devaluación
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold text-green-700 mb-1">1. Encarecimiento de Infraestructura</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Servidores AWS: $500/mes → $580/mes (+16%)</li>
                    <li>• Licencias software: $300/mes → $348/mes (+16%)</li>
                    <li>• Total costos en USD: +$128/mes por cliente</li>
                    <li>• <strong>Costo variable: $300K → $350K COP</strong></li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold text-green-700 mb-1">2. Presión sobre Márgenes</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Margen contribución: $900K → $850K (-5.5%)</li>
                    <li>• Nuevo punto equilibrio: 65 → 80 clientes</li>
                    <li>• Brecha adicional: 15 clientes más requeridos</li>
                    <li>• Tiempo para PE: 5 meses → 7-8 meses</li>
                  </ul>
                </div>

                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold text-green-700 mb-1">3. Competencia Nearshoring</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Empresas extranjeras más competitivas</li>
                    <li>• Precio en USD parece "más barato"</li>
                    <li>• Clientes grandes prefieren proveedores internacionales</li>
                    <li>• Presión sobre los 3 clientes grandes (60% ingresos)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
              Impacto Combinado Crítico
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center mt-3">
              <div>
                <p className="text-2xl font-bold text-red-400">+35%</p>
                <p className="text-xs">Aumento costos totales</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400">80</p>
                <p className="text-xs">Nuevo punto equilibrio (vs 65)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">-40%</p>
                <p className="text-xs">Reducción utilidad proyectada</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6 - Impacto Microeconómico
    {
      title: "Impacto Microeconómico (Empresa y Clientes)",
      content: (
        <div className="space-y-5">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">Nivel Microeconómico: Funcionamiento Interno de TechFlow</h3>
            <p className="text-sm text-gray-700">
              Análisis de cómo los fenómenos económicos afectan directamente las operaciones, decisiones y relaciones comerciales de la empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-500">
              <h4 className="font-semibold text-md mb-3 text-purple-700">Estructura de Costos</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-purple-50 p-2 rounded">
                  <p className="font-semibold text-xs text-purple-800 mb-1">Efecto Inflación</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>→ Costos fijos mensuales: $58M → $68M</li>
                    <li>→ Presión para ajustar salarios del equipo técnico</li>
                    <li>→ Riesgo de fuga de talento si no se ajusta</li>
                    <li>→ Reducción de margen operativo del 23% al 17%</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <p className="font-semibold text-xs text-green-800 mb-1">Efecto Devaluación</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>→ Costos variables en USD: +16% ($300K → $350K)</li>
                    <li>→ Infraestructura cloud AWS más costosa</li>
                    <li>→ Licencias de software aumentan automáticamente</li>
                    <li>→ Margen de contribución: $900K → $850K por cliente</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-orange-500">
              <h4 className="font-semibold text-md mb-3 text-orange-700">Capacidad de Inversión</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-orange-50 p-2 rounded">
                  <p className="font-semibold text-xs text-orange-800 mb-1">Proyecto Modelo Híbrido</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>→ Inversión planeada: $90M COP</li>
                    <li>→ Con inflación: $90M → $105M (+17%)</li>
                    <li>→ Riesgo: Insuficiencia de capital de trabajo</li>
                    <li>→ Necesidad de financiamiento externo costoso</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-2 rounded">
                  <p className="font-semibold text-xs text-red-800 mb-1">Tasas de Interés</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>→ Crédito empresarial: 13-15% EA (2023)</li>
                    <li>→ Servicio deuda más costoso que previsto</li>
                    <li>→ Menor disponibilidad de líneas de crédito</li>
                    <li>→ Priorizar financiamiento con flujo operativo</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-teal-500">
              <h4 className="font-semibold text-md mb-3 text-teal-700">Relación con Clientes</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-teal-50 p-2 rounded">
                  <p className="font-semibold text-xs text-teal-800 mb-1">Comportamiento de Demanda</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>→ Pymes reducen presupuesto tecnológico 20-30%</li>
                    <li>→ Ciclos de venta más largos (3-6 meses)</li>
                    <li>→ Mayor exigencia en ROI demostrable</li>
                    <li>→ Preferencia por contratos cortos (6 meses vs 1 año)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <p className="font-semibold text-xs text-blue-800 mb-1">Presión sobre Precios</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>→ Clientes negocian descuentos agresivamente</li>
                    <li>→ Riesgo de churn si se aumentan precios</li>
                    <li>→ 3 clientes grandes (60% ingresos) vulnerables</li>
                    <li>→ Dilema: mantener precio vs. rentabilidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-md mb-3 text-gray-800 text-center">Impactos Cuantitativos en Modelo de Negocio</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded shadow text-center">
                <p className="text-xl font-bold text-red-600">80</p>
                <p className="text-xs text-gray-600">Nuevo punto equilibrio (vs 65 original)</p>
              </div>
              <div className="bg-white p-3 rounded shadow text-center">
                <p className="text-xl font-bold text-orange-600">8 meses</p>
                <p className="text-xs text-gray-600">Tiempo para alcanzar PE (vs 5 meses)</p>
              </div>
              <div className="bg-white p-3 rounded shadow text-center">
                <p className="text-xl font-bold text-yellow-600">$11M</p>
                <p className="text-xs text-gray-600">Utilidad mes 12 (vs $18.5M proyectado)</p>
              </div>
              <div className="bg-white p-3 rounded shadow text-center">
                <p className="text-xl font-bold text-red-600">-40%</p>
                <p className="text-xs text-gray-600">Reducción rentabilidad esperada</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7 - Impacto Macroeconómico
    {
      title: "Impacto Macroeconómico (Economía Nacional)",
      content: (
        <div className="space-y-5">
          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
            <h3 className="text-lg font-semibold mb-2 text-indigo-800 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Nivel Macroeconómico: Contexto Económico Nacional
            </h3>
            <p className="text-sm text-gray-700">
              Análisis de cómo los fenómenos afectan la economía colombiana en su conjunto y cómo este contexto impacta indirectamente a TechFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-500">
              <h4 className="font-semibold text-md mb-3 text-red-700">Política Monetaria y Fiscal</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-semibold text-xs text-red-800 mb-2">Respuesta del Banco de la República</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>Tasas de interés altas:</strong> 13.25% para controlar inflación (2023)</li>
                    <li>• <strong>Política restrictiva:</strong> Reduce liquidez en la economía</li>
                    <li>• <strong>Impacto crédito:</strong> Menos financiamiento para empresas y consumidores</li>
                    <li>• <strong>Efecto secundario:</strong> Desaceleración económica (PIB +1% en 2023)</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-semibold text-xs text-orange-800 mb-2">Política Fiscal del Gobierno</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>Reforma tributaria:</strong> Mayor carga impositiva empresas</li>
                    <li>• <strong>Gasto público:</strong> Programas sociales vs inversión productiva</li>
                    <li>• <strong>Déficit fiscal:</strong> Presión sobre endeudamiento público</li>
                    <li>• <strong>Incertidumbre:</strong> Cambios regulatorios frecuentes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-500">
              <h4 className="font-semibold text-md mb-3 text-blue-700">Crecimiento y Empleo</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-xs text-blue-800 mb-2">Desaceleración Económica</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>PIB 2023:</strong> +0.6% (desaceleración significativa)</li>
                    <li>• <strong>Consumo:</strong> Reducción del gasto de hogares y empresas</li>
                    <li>• <strong>Inversión:</strong> -5% inversión privada (incertidumbre)</li>
                    <li>• <strong>Sector tecnológico:</strong> Menos demanda de servicios digitales</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="font-semibold text-xs text-cyan-800 mb-2">Mercado Laboral</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>Desempleo:</strong> 10-11% tasa nacional</li>
                    <li>• <strong>Talento tech:</strong> Alta competencia por desarrolladores</li>
                    <li>• <strong>Rotación:</strong> Profesionales buscan mejores salarios</li>
                    <li>• <strong>Costos salariales:</strong> Presión al alza continua</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
              <h4 className="font-semibold text-md mb-3 text-green-700">Comercio Exterior</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-xs text-green-800 mb-2">Balanza Comercial</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>Déficit cuenta corriente:</strong> -6% del PIB</li>
                    <li>• <strong>Dependencia importaciones:</strong> Tecnología, equipos, servicios</li>
                    <li>• <strong>Exportaciones:</strong> Concentradas en commodities (petróleo, carbón)</li>
                    <li>• <strong>Vulnerabilidad:</strong> Shocks externos afectan tasa de cambio</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-500">
              <h4 className="font-semibold text-md mb-3 text-purple-700">Sector Empresarial Pyme</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-xs text-purple-800 mb-2">Impacto en Clientes Objetivo</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>Liquidez reducida:</strong> Dificultad acceso a crédito</li>
                    <li>• <strong>Cierre de empresas:</strong> Aumento insolvencias 15-20%</li>
                    <li>• <strong>Inversión diferida:</strong> Proyectos tecnológicos pospuestos</li>
                    <li>• <strong>Supervivencia:</strong> Prioridad en costos vs innovación</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg border border-indigo-300">
            <h4 className="font-semibold text-md mb-3 text-gray-800 text-center">Indicadores Macroeconómicos Clave (Colombia 2023-2024)</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <p className="text-lg font-bold text-red-600">11.8%</p>
                <p className="text-xs text-gray-600">Inflación anual</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <p className="text-lg font-bold text-orange-600">0.6%</p>
                <p className="text-xs text-gray-600">Crecimiento PIB</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <p className="text-lg font-bold text-yellow-600">10.8%</p>
                <p className="text-xs text-gray-600">Desempleo</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <p className="text-lg font-bold text-green-600">$4,350</p>
                <p className="text-xs text-gray-600">TRM COP/USD</p>
              </div>
              <div className="bg-white p-2 rounded shadow-sm text-center">
                <p className="text-lg font-bold text-blue-600">13.25%</p>
                <p className="text-xs text-gray-600">Tasa de interés</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-sm text-gray-800">
              <strong className="text-yellow-700">Conexión Macro-Micro:</strong> El deterioro del entorno macroeconómico colombiano se traduce directamente en menor demanda para TechFlow, mayor dificultad de financiamiento, costos operativos elevados y un ecosistema empresarial debilitado que reduce las oportunidades de crecimiento y aumenta el riesgo de cartera.
            </p>
          </div>
        </div>
      )
    },

    // Slide 8 - Acción 1
    {
      title: "Acción Estratégica 1: Optimización de Costos y Eficiencia Operativa",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold mb-2 text-blue-800 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Objetivo Estratégico
            </h3>
            <p className="text-sm text-gray-700">
              Reducir la estructura de costos en un 15-20% sin comprometer la calidad del servicio ni la capacidad de entrega, mediante optimización tecnológica, automatización de procesos y renegociación de contratos con proveedores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-md mb-3 text-gray-800 border-b-2 border-blue-400 pb-2">
                Tácticas de Implementación
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-xs text-blue-700 mb-2">1. Migración a Infraestructura Híbrida</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Migrar cargas no críticas a servidores locales (reducir AWS 40%)</li>
                    <li>• Usar proveedores cloud regionales más económicos</li>
                    <li>• Implementar caché y CDN para reducir consumo de ancho de banda</li>
                    <li><strong>Ahorro proyectado: $8M/mes en infraestructura</strong></li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-xs text-green-700 mb-2">2. Automatización de Procesos</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Implementar CI/CD para reducir tiempo de desarrollo 30%</li>
                    <li>• Chatbots con IA para soporte nivel 1 (24/7 sin costo adicional)</li>
                    <li>• Automatizar testing y QA con herramientas open-source</li>
                    <li><strong>Ahorro: 2 FTE en soporte + mayor productividad</strong></li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-xs text-purple-700 mb-2">3. Renegociación de Contratos</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Negociar descuentos por volumen con proveedores SaaS</li>
                    <li>• Consolidar licencias (eliminar herramientas redundantes)</li>
                    <li>• Buscar alternativas open-source donde sea viable</li>
                    <li><strong>Ahorro proyectado: $3M/mes en licencias</strong></li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-semibold text-xs text-orange-700 mb-2">4. Modelo de Trabajo Híbrido</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Reducir espacio de oficina en 50% (2-3 días presenciales)</li>
                    <li>• Negociar arriendo flexible o coworking</li>
                    <li>• Reducir costos de servicios públicos y mantenimiento</li>
                    <li><strong>Ahorro: $2.5M/mes en arriendo y servicios</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-md mb-3 text-gray-800 border-b-2 border-green-400 pb-2">
                Plan de Ejecución y Resultados
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-xs text-gray-800 mb-2">Cronograma (6 meses)</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li><strong>Mes 1-2:</strong> Auditoría de costos y selección proveedores</li>
                    <li><strong>Mes 3-4:</strong> Migración infraestructura y automatización</li>
                    <li><strong>Mes 5-6:</strong> Implementación completa y optimización</li>
                  </ul>
                </div>

                <div className="bg-green-100 p-3 rounded border-l-4 border-green-600">
                  <p className="font-semibold text-xs text-green-800 mb-2">Impacto Financiero</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">Costos fijos actuales:</span>
                      <span className="text-xs font-bold">$68M/mes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">Ahorro total proyectado:</span>
                      <span className="text-xs font-bold text-green-600">-$13.5M/mes</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="text-xs text-gray-700">Nuevos costos fijos:</span>
                      <span className="text-xs font-bold text-blue-600">$54.5M/mes</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-200 p-2 rounded mt-2">
                      <span className="text-xs font-bold text-green-800">Reducción:</span>
                      <span className="text-sm font-bold text-green-800">-20%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-600">
                  <p className="font-semibold text-xs text-blue-800 mb-2">Nuevo Punto de Equilibrio</p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-700">
                      PE = $54.5M / $850K = <strong className="text-blue-700">64 clientes</strong>
                    </p>
                    <p className="text-xs text-green-700 font-semibold">
                      ✓ Se vuelve al objetivo original de 65 clientes
                    </p>
                    <p className="text-xs text-green-700 font-semibold">
                      ✓ Mejora margen operativo del 17% al 22%
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-xs text-yellow-800 mb-2">KPIs de Seguimiento</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Costo operativo mensual total</li>
                    <li>• Costo por cliente atendido</li>
                    <li>• Tiempo promedio de desarrollo (sprints)</li>
                    <li>• Satisfacción del cliente (NPS ≥70)</li>
                    <li>• Rotación de personal (&lt;15% anual)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Impacto contra Inflación y Devaluación:</p>
                <p className="text-xs mt-1">Esta acción compensa el aumento de costos, protege márgenes y permite mantener precios competitivos sin sacrificar rentabilidad.</p>
              </div>
              <div className="text-center bg-white bg-opacity-20 p-3 rounded">
                <p className="text-2xl font-bold">-20%</p>
                <p className="text-xs">Reducción costos</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9 - Acción 2
    {
      title: "Acción Estratégica 2: Diversificación de Cartera y Modelo de Precios Dinámico",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-lg font-semibold mb-2 text-purple-800 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Objetivo Estratégico
            </h3>
            <p className="text-sm text-gray-700">
              Reducir la dependencia de los 3 clientes grandes (60% de ingresos) y establecer un modelo de precios flexible que permita ajustes según el tipo de cliente, mientras se mantiene la competitividad y se protegen los márgenes de rentabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-md mb-3 text-gray-800 border-b-2 border-purple-400 pb-2">
                Tácticas de Implementación
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-xs text-purple-700 mb-2">1. Segmentación de Clientes y Precios</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• <strong>Tier Básico ($900K/mes):</strong> Micro-pymes, funcionalidades estándar, soporte normal</li>
                    <li>• <strong>Tier Profesional ($1.5M/mes):</strong> Pymes medianas, personalizaciones moderadas, soporte prioritario</li>
                    <li>• <strong>Tier Enterprise ($3M+/mes):</strong> Empresas grandes, soluciones a medida, soporte 24/7 dedicado</li>
                    <li><strong>Beneficio: Capturar diferentes nichos de mercado</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-xs text-blue-700 mb-2">2. Estrategia de Adquisición Agresiva</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Marketing digital: Invertir $6M/mes en Google Ads, LinkedIn, SEO</li>
                    <li>• Programa de referidos: 2 meses gratis por cliente referido</li>
                    <li>• Alianzas con gremios: ACOPI, Cámaras de Comercio, ANDI</li>
                    <li>• Freemium: 30 días gratis para probar el producto base</li>
                    <li><strong>Meta: Adquirir 12-15 nuevos clientes/mes</strong></li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-xs text-green-700 mb-2">3. Protección contra Devaluación</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Cláusula de ajuste: Indexar costos en USD al TRM (5% anual mínimo)</li>
                    <li>• Contratos anuales con prepago: Descuento 15% por pago adelantado</li>
                    <li>• Facturación mixta: Parte fija en COP + variable según TRM</li>
                    <li><strong>Beneficio: Transferir riesgo cambiario controladamente</strong></li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-semibold text-xs text-orange-700 mb-2">4. Retención y Upselling</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Customer Success Manager dedicado (clientes grandes)</li>
                    <li>• Programas de fidelización: Descuentos por antigüedad</li>
                    <li>• Módulos adicionales: CRM avanzado, BI, automatización</li>
                    <li>• Capacitación incluida: Maximizar uso del producto</li>
                    <li><strong>Meta: Aumentar retención al 92% y ARPU en 25%</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-md mb-3 text-gray-800 border-b-2 border-orange-400 pb-2">
                Plan de Ejecución y Resultados
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-xs text-gray-800 mb-2">Cronograma (12 meses)</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li><strong>Mes 1-3:</strong> Diseño tiers, ajuste producto, lanzamiento marketing</li>
                    <li><strong>Mes 4-6:</strong> Migración clientes actuales + adquisición nuevos</li>
                    <li><strong>Mes 7-9:</strong> Optimización embudos y expansión comercial</li>
                    <li><strong>Mes 10-12:</strong> Consolidación y análisis de rentabilidad</li>
                  </ul>
                </div>

                <div className="bg-purple-100 p-3 rounded border-l-4 border-purple-600">
                  <p className="font-semibold text-xs text-purple-800 mb-2">Distribución Objetivo de Cartera (Mes 12)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-700">Tier Básico (50 clientes × $900K):</span>
                      <span className="font-bold">$45M/mes</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-700">Tier Profesional (30 clientes × $1.5M):</span>
                      <span className="font-bold">$45M/mes</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-700">Tier Enterprise (10 clientes × $3M):</span>
                      <span className="font-bold">$30M/mes</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2 text-xs">
                      <span className="font-bold text-gray-800">Total (90 clientes):</span>
                      <span className="font-bold text-purple-700">$120M/mes</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-3 rounded border-l-4 border-green-600">
                  <p className="font-semibold text-xs text-green-800 mb-2">Reducción de Riesgo</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-700">Dependencia actual (3 clientes):</span>
                      <span className="font-bold text-red-600">60%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-700">Dependencia objetivo (10 más grandes):</span>
                      <span className="font-bold text-green-600">35%</span>
                    </div>
                    <div className="bg-green-200 p-2 rounded mt-2">
                      <p className="text-xs font-bold text-green-800 text-center">
                        ✓ Riesgo de concentración reducido en 42%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-600">
                  <p className="font-semibold text-xs text-blue-800 mb-2">Impacto Financiero</p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-700">
                      Ingresos mes 12: <strong className="text-blue-700">$120M</strong> (vs $102M proyectado originalmente)
                    </p>
                    <p className="text-xs text-gray-700">
                      Costos mes 12: <strong>$81M</strong> ($54.5M fijos + $26.5M variables)
                    </p>
                    <p className="text-xs text-gray-700">
                      Utilidad mes 12: <strong className="text-green-700">$39M</strong> (vs $18.5M original)
                    </p>
                    <p className="text-xs font-bold text-blue-700 bg-blue-200 p-2 rounded mt-2">
                      Margen operativo: 32.5% (vs 18% sin acciones)
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-xs text-yellow-800 mb-2">KPIs de Seguimiento</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• CAC (Costo Adquisición Cliente) &lt; $1.5M</li>
                    <li>• LTV/CAC ratio &gt; 3:1</li>
                    <li>• Tasa de retención mensual &gt; 92%</li>
                    <li>• ARPU (Ingreso promedio por usuario)</li>
                    <li>• Índice de concentración de ingresos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Impacto contra Inflación y Devaluación:</p>
                <p className="text-xs mt-1">La diversificación reduce el riesgo operativo, mientras el modelo de precios dinámico permite ajustes que protegen la rentabilidad ante fluctuaciones económicas.</p>
              </div>
              <div className="text-center bg-white bg-opacity-20 p-3 rounded">
                <p className="text-2xl font-bold">+110%</p>
                <p className="text-xs">Crecimiento utilidad</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10 - Acción 3
    {
      title: "Acción Estratégica 3: Cobertura Financiera y Reservas Estratégicas",
      content: (
        <div className="space-y-4">
          <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
            <h3 className="text-lg font-semibold mb-2 text-emerald-800 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Objetivo Estratégico
            </h3>
            <p className="text-sm text-gray-700">
              Establecer mecanismos de protección financiera contra la volatilidad cambiaria y la inflación, mediante la creación de fondos de contingencia, coberturas cambiarias naturales y optimización de la gestión de tesorería para garantizar la estabilidad operativa y financiera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-md mb-3 text-gray-800 border-b-2 border-emerald-400 pb-2">
                Tácticas de Implementación
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-emerald-50 p-3 rounded">
                  <p className="font-semibold text-xs text-emerald-700 mb-2">1. Fondo de Reserva Operacional</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Constituir fondo equivalente a 3 meses de operación ($165M)</li>
                    <li>• Inversión en CDTs o fondos de liquidez (8-10% EA)</li>
                    <li>• Aportación mensual: 10% de la utilidad operativa</li>
                    <li>• Uso exclusivo: Emergencias, volatilidad, oportunidades estratégicas</li>
                    <li><strong>Meta: Alcanzar fondo completo en 18 meses</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-xs text-blue-700 mb-2">2. Cobertura Cambiaria Natural</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Explorar clientes internacionales (pago en USD/EUR)</li>
                    <li>• Ofrecer servicios de desarrollo nearshore a empresas extranjeras</li>
                    <li>• Contratos en moneda extranjera: 20-30% de ingresos</li>
                    <li>• Balance natural: Ingresos USD compensan costos USD</li>
                    <li><strong>Beneficio: Hedge natural sin instrumentos financieros</strong></li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-xs text-purple-700 mb-2">3. Optimización de Tesorería</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Negociar pagos a proveedores internacionales en pesos (cuando posible)</li>
                    <li>• Compra anticipada de USD en momentos de TRM favorable</li>
                    <li>• Forward cambiario simple para gastos USD predecibles (6 meses)</li>
                    <li>• Política de pagos: 30 días vs cobros 15 días (mejorar flujo)</li>
                    <li><strong>Meta: Reducir exposición cambiaria en 50%</strong></li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-semibold text-xs text-orange-700 mb-2">4. Financiamiento Estratégico</p>
                  <ul className="text-gray-700 text-xs space-y-1 ml-3">
                    <li>• Evitar endeudamiento en pesos con tasas altas (13-15% EA)</li>
                    <li>• Considerar inversionistas ángeles o capital semilla ($200-300M)</li>
                    <li>• Alianzas con bancos: Líneas de crédito preaprobadas condicionadas</li>
                    <li>• Explorar Bancóldex/iNNpulsa: Líneas preferenciales para tecnología</li>
                    <li><strong>Meta: Mantener deuda/patrimonio &lt; 40%</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-md mb-3 text-gray-800 border-b-2 border-teal-400 pb-2">
                Plan de Ejecución y Resultados
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-emerald-500">
                  <p className="font-semibold text-xs text-gray-800 mb-2">Cronograma (18 meses)</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li><strong>Mes 1-3:</strong> Apertura fondo reserva, política tesorería</li>
                    <li><strong>Mes 4-9:</strong> Captación clientes internacionales</li>
                    <li><strong>Mes 10-15:</strong> Implementación forwards, optimización</li>
                    <li><strong>Mes 16-18:</strong> Evaluación capital semilla si necesario</li>
                  </ul>
                </div>

                <div className="bg-emerald-100 p-3 rounded border-l-4 border-emerald-600">
                  <p className="font-semibold text-xs text-emerald-800 mb-2">Estructura Financiera Objetivo</p>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded shadow-sm">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Fondo de Reserva (Mes 18)</p>
                      <p className="text-lg font-bold text-emerald-600">$165M</p>
                      <p className="text-xs text-gray-600">Equivalente a 3 meses operación</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Ingresos en USD/EUR</p>
                      <p className="text-lg font-bold text-blue-600">25%</p>
                      <p className="text-xs text-gray-600">$30M/mes en moneda extranjera</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Exposición Cambiaria Neta</p>
                      <p className="text-lg font-bold text-green-600">-50%</p>
                      <p className="text-xs text-gray-600">Reducción del riesgo TRM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-600">
                  <p className="font-semibold text-xs text-blue-800 mb-2">Protección contra Escenarios Adversos</p>
                  <div className="space-y-2 text-xs text-gray-700">
                    <div className="bg-white p-2 rounded">
                      <p className="font-semibold text-red-700">Escenario 1: TRM sube a $5,000</p>
                      <p>• Sin cobertura: Costo adicional $15M/mes</p>
                      <p className="text-green-700">• Con cobertura: Costo adicional $7.5M/mes (-50%)</p>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p className="font-semibold text-red-700">Escenario 2: Pérdida cliente grande</p>
                      <p>• Sin reserva: Crisis de liquidez inmediata</p>
                      <p className="text-green-700">• Con reserva: 3 meses para reemplazar ingreso</p>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p className="font-semibold text-red-700">Escenario 3: Inflación persistente 15%</p>
                      <p>• Sin fondos: Incapacidad ajustar salarios</p>
                      <p className="text-green-700">• Con fondos: Capacidad de retener talento clave</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-xs text-yellow-800 mb-2">KPIs de Seguimiento</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Saldo fondo de reserva vs meta</li>
                    <li>• % ingresos en moneda extranjera</li>
                    <li>• Exposición cambiaria neta mensual</li>
                    <li>• Días de caja disponibles</li>
                    <li>• Ratio de cobertura de intereses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Impacto contra Inflación y Devaluación:</p>
                <p className="text-xs mt-1">Esta acción crea un colchón financiero que permite absorber shocks económicos sin comprometer la operación, protege contra volatilidad cambiaria y asegura continuidad del negocio en escenarios adversos.</p>
              </div>
              <div className="text-center bg-white bg-opacity-20 p-3 rounded">
                <p className="text-2xl font-bold">-50%</p>
                <p className="text-xs">Exposición a riesgo</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded">
            <p className="text-xs text-gray-800">
              <strong className="text-amber-700">Visión Integral:</strong> Las tres acciones estratégicas funcionan de manera sinérgica: la optimización de costos libera recursos para crear el fondo de reserva, mientras que la diversificación de cartera genera los ingresos necesarios para sostener las coberturas financieras. Juntas, transforman a TechFlow de una empresa vulnerable a los fenómenos macroeconómicos en una organización resiliente y preparada para crecer en contextos adversos.
            </p>
          </div>
        </div>
      )
    },

    // Slide 11 - Conclusiones
    {
      title: "Conclusiones",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-center">Conclusiones del Análisis</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-md text-blue-800 mb-2">Vulnerabilidad Macroeconómica Crítica</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    TechFlow Colombia opera en un entorno macroeconómico altamente volátil caracterizado por inflación persistente (11.8%) y devaluación significativa del peso (16% en 3 años). Estos fenómenos impactan directamente la estructura de costos de la empresa, incrementándolos en un 35% y amenazando la viabilidad del modelo de negocio híbrido diseñado en el Corte II. Sin acciones correctivas, el punto de equilibrio pasaría de 65 a 80 clientes, retrasando la rentabilidad y poniendo en riesgo la inversión de $90M COP.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-md text-green-800 mb-2">Impacto Diferenciado Micro y Macroeconómico</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A nivel microeconómico, la inflación presiona los costos operativos (salarios, arriendos, servicios) mientras la devaluación encarece la infraestructura tecnológica en dólares, comprimiendo márgenes del 23% al 17%. A nivel macroeconómico, la desaceleración económica colombiana (PIB +0.6%) y las altas tasas de interés (13.25%) reducen el apetito de inversión de las pymes clientes, generando una contracción de demanda del 20-30%. Este contexto crea un escenario de "doble impacto" donde TechFlow enfrenta simultáneamente costos crecientes y menores ingresos potenciales.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-3">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-md text-purple-800 mb-2">Efectividad de las Estrategias de Mitigación Integradas</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Las tres acciones estratégicas propuestas actúan de manera complementaria y generan un impacto transformador. La optimización de costos (-20%) compensa el incremento inflacionario y restaura el punto de equilibrio original. La diversificación de cartera y el modelo de precios dinámico reducen el riesgo de concentración (60% → 35%) y permiten capturar diferentes segmentos de mercado, aumentando los ingresos proyectados de $102M a $120M mensuales. La cobertura financiera y las reservas estratégicas crean un colchón de protección ante shocks económicos. En conjunto, estas acciones mejoran el margen operativo del 18% proyectado al 32.5% y aumentan la utilidad mensual de $18.5M a $39M (+110%).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full p-2 mr-3">
                  <span className="text-orange-600 font-bold text-lg">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-md text-orange-800 mb-2">Construcción de Resiliencia Empresarial</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    El análisis demuestra que la sostenibilidad de TechFlow no depende únicamente de la excelencia técnica o la innovación del producto, sino fundamentalmente de su capacidad para anticipar, absorber y adaptarse a las fluctuaciones macroeconómicas. La implementación de mecanismos de protección financiera (fondo de reserva de $165M, cobertura cambiaria natural del 25% de ingresos, forwards) y la diversificación tanto de clientes como de fuentes de ingreso transforman la empresa de un modelo vulnerable y reactivo a uno resiliente y proactivo. Esta resiliencia es especialmente crítica en economías emergentes como Colombia, donde la volatilidad es estructural y no coyuntural.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600">
              <div className="flex items-start">
                <div className="bg-teal-100 rounded-full p-2 mr-3">
                  <span className="text-teal-600 font-bold text-lg">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-md text-teal-800 mb-2">Ventaja Competitiva Sostenible en Contextos Adversos</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Mientras los competidores de TechFlow (tanto locales como internacionales) enfrentarán los mismos desafíos macroeconómicos, la empresa se posiciona estratégicamente para convertir la adversidad en oportunidad. La optimización de costos permite mantener precios competitivos sin sacrificar márgenes; la diversificación reduce la dependencia de clientes vulnerables; y las coberturas financieras proporcionan estabilidad operativa. Esta combinación crea una ventaja competitiva defensiva que protege la posición de mercado y una ventaja ofensiva que permite capturar clientes de competidores menos preparados. En un entorno donde muchas empresas tecnológicas pequeñas podrían quebrar o estancarse, TechFlow tiene el potencial no solo de sobrevivir sino de crecer y consolidarse como líder regional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-lg mt-4">
            <p className="text-center text-sm font-semibold">
              "En economías volátiles, la planificación estratégica y la gestión de riesgos no son opcionales: son condiciones de supervivencia y crecimiento sostenible."
            </p>
          </div>
        </div>
      )
    },

    // Slide 12 - Resumen Integrado
    {
      title: "Integración de Cortes I, II y III",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-center">Evolución Estratégica de TechFlow Colombia</h3>
            <p className="text-center text-sm mt-2">De la Conceptualización a la Resiliencia Económica</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-blue-700">CORTE I</h4>
                <div className="bg-blue-100 rounded-full px-3 py-1">
                  <span className="text-blue-700 text-xs font-semibold">Fundación</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-xs text-blue-800 mb-2">Perfil Empresarial</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Sector: Tecnología y Servicios Digitales</li>
                    <li>• Actividad: Desarrollo software para pymes</li>
                    <li>• Fundación: 2021</li>
                    <li>• Equipo: 15 empleados</li>
                    <li>• Facturación: $800M COP anuales</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold text-xs text-gray-800 mb-2">Características Iniciales</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• 25 clientes recurrentes (retención 85%)</li>
                    <li>• Metodología ágil (sprints 2 semanas)</li>
                    <li>• Precios 30% menores que multinacionales</li>
                    <li>• Soporte técnico 24/7 en español</li>
                  </ul>
                </div>

                <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-700">
                  <p className="font-semibold text-xs text-blue-900 mb-1">Entregable:</p>
                  <p className="text-xs text-gray-700">Identificación de la empresa, propuesta de valor y posicionamiento inicial en el mercado tecnológico colombiano.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg border-t-4 border-purple-600">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-purple-700">CORTE II</h4>
                <div className="bg-purple-100 rounded-full px-3 py-1">
                  <span className="text-purple-700 text-xs font-semibold">Estrategia</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-xs text-purple-800 mb-2">Análisis DOFA</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>F:</strong> Equipo calificado, metodología ágil</li>
                    <li>• <strong>O:</strong> Transformación digital, incentivos</li>
                    <li>• <strong>D:</strong> Capital limitado, dependencia clientes</li>
                    <li>• <strong>A:</strong> Competencia, rotación talento</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold text-xs text-gray-800 mb-2">Decisión Estratégica</p>
                  <p className="text-xs text-gray-700 mb-2">
                    <strong>Modelo Híbrido:</strong> SaaS base + personalizaciones
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Inversión: $90M COP</li>
                    <li>• Punto equilibrio: 65 clientes</li>
                    <li>• Utilidad proyectada mes 12: $18.5M</li>
                    <li>• Tiempo para PE: 5 meses</li>
                  </ul>
                </div>

                <div className="bg-purple-100 p-3 rounded border-l-4 border-purple-700">
                  <p className="font-semibold text-xs text-purple-900 mb-1">Entregable:</p>
                  <p className="text-xs text-gray-700">Análisis DOFA, proceso de toma de decisiones estructurado y cálculo del punto de equilibrio del modelo híbrido.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg border-t-4 border-green-600">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-green-700">CORTE III</h4>
                <div className="bg-green-100 rounded-full px-3 py-1">
                  <span className="text-green-700 text-xs font-semibold">Resiliencia</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-xs text-green-800 mb-2">Fenómenos Económicos</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>Inflación:</strong> 11.8% anual → Costos +35%</li>
                    <li>• <strong>Devaluación:</strong> 16% acumulada → USD +16%</li>
                    <li>• Nuevo PE sin acciones: 80 clientes</li>
                    <li>• Rentabilidad amenazada (-40%)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold text-xs text-gray-800 mb-2">Acciones de Mitigación</p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• <strong>Acción 1:</strong> Optimización costos (-20%)</li>
                    <li>• <strong>Acción 2:</strong> Diversificación cartera</li>
                    <li>• <strong>Acción 3:</strong> Cobertura financiera</li>
                    <li>• Resultado: Utilidad $39M (+110%)</li>
                  </ul>
                </div>

                <div className="bg-green-100 p-3 rounded border-l-4 border-green-700">
                  <p className="font-semibold text-xs text-green-900 mb-1">Entregable:</p>
                  <p className="text-xs text-gray-700">Análisis de impacto micro/macroeconómico y estrategias integrales de mitigación contra inflación y devaluación.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-lg border-2 border-gray-300">
            <h4 className="font-bold text-lg text-gray-800 mb-4 text-center">Comparativo de Indicadores Clave</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-700 text-white">
                  <tr>
                    <th className="p-2 text-left">Indicador</th>
                    <th className="p-2 text-center">Corte I</th>
                    <th className="p-2 text-center">Corte II (Proyección)</th>
                    <th className="p-2 text-center">Corte III (Con Acciones)</th>
                    <th className="p-2 text-center">Mejora</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b bg-white">
                    <td className="p-2 font-semibold">Número de clientes</td>
                    <td className="p-2 text-center">25</td>
                    <td className="p-2 text-center">85</td>
                    <td className="p-2 text-center text-green-700 font-bold">90</td>
                    <td className="p-2 text-center text-green-700">+260%</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 font-semibold">Ingresos mensuales</td>
                    <td className="p-2 text-center">$67M</td>
                    <td className="p-2 text-center">$102M</td>
                    <td className="p-2 text-center text-green-700 font-bold">$120M</td>
                    <td className="p-2 text-center text-green-700">+79%</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="p-2 font-semibold">Costos fijos mensuales</td>
                    <td className="p-2 text-center">$58M</td>
                    <td className="p-2 text-center">$68M</td>
                    <td className="p-2 text-center text-green-700 font-bold">$54.5M</td>
                    <td className="p-2 text-center text-green-700">-6%</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 font-semibold">Punto de equilibrio</td>
                    <td className="p-2 text-center">-</td>
                    <td className="p-2 text-center">65 clientes</td>
                    <td className="p-2 text-center text-green-700 font-bold">64 clientes</td>
                    <td className="p-2 text-center text-green-700">Estable</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="p-2 font-semibold">Utilidad mensual (mes 12)</td>
                    <td className="p-2 text-center">-</td>
                    <td className="p-2 text-center">$18.5M</td>
                    <td className="p-2 text-center text-green-700 font-bold">$39M</td>
                    <td className="p-2 text-center text-green-700">+110%</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 font-semibold">Margen operativo</td>
                    <td className="p-2 text-center">-</td>
                    <td className="p-2 text-center">18%</td>
                    <td className="p-2 text-center text-green-700 font-bold">32.5%</td>
                    <td className="p-2 text-center text-green-700">+14.5pp</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="p-2 font-semibold">Concentración de riesgo</td>
                    <td className="p-2 text-center text-red-600">60% (3 clientes)</td>
                    <td className="p-2 text-center text-orange-600">~45%</td>
                    <td className="p-2 text-center text-green-700 font-bold">35%</td>
                    <td className="p-2 text-center text-green-700">-42%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 font-semibold">Fondo de reserva</td>
                    <td className="p-2 text-center">$0</td>
                    <td className="p-2 text-center">$0</td>
                    <td className="p-2 text-center text-green-700 font-bold">$165M</td>
                    <td className="p-2 text-center text-green-700">Nuevo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-md text-blue-800 mb-2">Narrativa de Evolución</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                TechFlow Colombia comenzó como una empresa tecnológica pequeña con bases sólidas pero vulnerable (Corte I). A través de un análisis estratégico riguroso, identificó una oportunidad de crecimiento mediante un modelo híbrido innovador (Corte II). Sin embargo, el contexto macroeconómico adverso amenazaba la viabilidad de esta estrategia. La respuesta: tres acciones integradas de mitigación que no solo neutralizan las amenazas económicas sino que fortalecen la posición competitiva y crean ventajas sostenibles (Corte III).
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-semibold text-md text-purple-800 mb-2">Lecciones Aprendidas</h4>
              <ul className="text-xs text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>La planificación estratégica sin consideración del contexto macroeconómico es incompleta y riesgosa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>La resiliencia empresarial requiere acciones proactivas, no reactivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>La diversificación (clientes, ingresos, coberturas) es fundamental para la sostenibilidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>La eficiencia operativa es una ventaja competitiva defensiva crucial</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-5 rounded-lg text-center">
            <p className="text-lg font-bold mb-2">De $800M anuales a $1,440M anuales proyectados</p>
            <p className="text-sm">Con rentabilidad protegida y resiliencia estructural ante shocks macroeconómicos</p>
            <div className="mt-3 flex justify-center space-x-8">
              <div>
                <p className="text-3xl font-bold">+80%</p>
                <p className="text-xs">Crecimiento ingresos</p>
              </div>
              <div>
                <p className="text-3xl font-bold">32.5%</p>
                <p className="text-xs">Margen operativo</p>
              </div>
              <div>
                <p className="text-3xl font-bold">-50%</p>
                <p className="text-xs">Exposición riesgos</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13 - Cierre
    {
      title: "Cierre",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-2xl">
              <h1 className="text-4xl font-bold mb-4">TechFlow Colombia</h1>
              <p className="text-xl mb-2">De la Vulnerabilidad a la Resiliencia</p>
              <p className="text-sm opacity-90">Transformación Estratégica en Contextos Económicos Adversos</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <Building2 className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h3 className="font-bold text-lg text-blue-800 mb-2">Solidez Operativa</h3>
                <p className="text-sm text-gray-700">Costos optimizados y estructura eficiente</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg shadow-md border-t-4 border-purple-600">
                <BarChart3 className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                <h3 className="font-bold text-lg text-purple-800 mb-2">Crecimiento Sostenible</h3>
                <p className="text-sm text-gray-700">Diversificación y expansión controlada</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg shadow-md border-t-4 border-green-600">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-600" />
                <h3 className="font-bold text-lg text-green-800 mb-2">Protección Financiera</h3>
                <p className="text-sm text-gray-700">Coberturas y reservas estratégicas</p>
              </div>
            </div>

            <div className="bg-gray-800 text-white p-6 rounded-lg mt-6">
              <p className="text-lg font-semibold mb-3">Análisis Integral de los Tres Cortes</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-blue-400">Corte I</p>
                  <p className="text-xs">Fundación e Identidad</p>
                </div>
                <div>
                  <p className="font-bold text-purple-400">Corte II</p>
                  <p className="text-xs">Estrategia y Decisión</p>
                </div>
                <div>
                  <p className="font-bold text-green-400">Corte III</p>
                  <p className="text-xs">Resiliencia Económica</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-lg font-semibold text-gray-800">Universidad ECCI</p>
              <p className="text-md text-gray-600">Fundamentos de Administración y Economía</p>
              <p className="text-sm text-gray-500">Prof. Edgar Sanabria Torres</p>
              <div className="pt-4 border-t border-gray-300">
                <p className="text-sm font-semibold text-gray-700">Autores:</p>
                <p className="text-sm text-gray-600">Alejandro Jimenez (111982)</p>
                
              </div>
              <p className="text-sm text-gray-500 pt-4">Octubre 2025 - Bogotá D.C., Colombia</p>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg mt-6">
              <p className="text-lg font-bold">¡Gracias por su atención!</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (slide < slides.length - 1) setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const goToSlide = (index) => {
    setSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Contenedor de la presentación */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Área del contenido */}
          <div className="p-8 min-h-[600px]">
            {slide > 0 && (
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 pb-3">
                {slides[slide].title}
              </h2>
            )}
            <div className="mt-4">
              {slides[slide].content}
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="bg-gray-800 p-4 flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={slide === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                slide === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">
                {slide + 1} / {slides.length}
              </span>
              <div className="flex space-x-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === slide ? 'bg-blue-500 w-8' : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={slide === slides.length - 1}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                slide === slides.length - 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <span>Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicador de progreso */}
        <div className="mt-4 bg-gray-300 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-300"
            style={{ width: `${((slide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PresentacionTechFlow;